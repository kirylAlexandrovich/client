import axios from 'axios';

export const renderMess = message => ({ type: 'RENDER_MESS', payload: message });

export const rerenderMessage = messages => ({ type: 'RERENDER_MESSAGE', payload: messages });

export const changeConnState = connectionState => ({ type: 'CHANGE_CONNECTION_STATE', payload: connectionState });

export const setEmail = email => ({ type: 'SET_EMAIL', payload: email });

export const renderClientsList = clientsList => ({ type: 'RENDER_CLIENTS_LIST', payload: clientsList });

export const changeRoomsList = roomsList => ({ type: 'CHANGE_ROOMS_LIST', payload: roomsList });

export const changePrivateRoomsList = privateRoomsList => ({ type: 'CHANGE_PRIVATE_ROOMS_LIST', payload: privateRoomsList });

export const changeRoom = room => ({ type: 'CHANGE_ROOM', payload: room });

export const createError = errorText => ({ type: 'CREATE_ERROR', payload: errorText });

export const roomCreated = isCreated => ({ type: 'ROOM_CREATED', payload: isCreated });

export const resetNewMessages = roomName => ({ type: 'RESET_NEW_MESSAGES', payload: roomName });

const host = 'http://192.168.1.65';

export const getRoomsList = email => (dispatch) => {
  axios.get(`${host}:8080/rooms`, {
    params: { email },
  }).then((res) => {
    console.log(res.data);
    dispatch(changeRoomsList(res.data.roomsArr));
    dispatch(changePrivateRoomsList(res.data.privateRoomsArr));
  }).catch((err) => { console.log(err); });
};

export const logInUser = (email, password) => (dispatch) => {
  axios.post(`${host}:8080/login`, {
    email,
    password,
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.data === 'no_such_client' || res.data === 'wrong_password') {
      dispatch(createError('Incorrect email or password'));
      return;
    }
    sessionStorage.setItem('connState', res.data.email);
    dispatch(createError(''));
    dispatch(setEmail(res.data.email));
  }).catch((err) => {
    console.log(err);
  });
};

export const getRoomMessages = roomName => (dispatch) => {
  dispatch(changeRoom(roomName));
  axios.post(`${host}:8080/get_room_messages`, { roomName })
    .then((res) => {
      if (res.data.length === 0) {
        dispatch(rerenderMessage([{ mess: 'Start chatting' }]));
        return;
      }
      dispatch(rerenderMessage(res.data));
    }).catch((err) => { console.log(err); });
};

export const createRoom = (addingPeople, roomName, email, privateRoom) => (dispatch) => {
  axios.post(`${host}:8080/create_room`, {
    addingPeople, roomName, email, privateRoom,
  }).then((res) => {
    if (res.data.isCreated === true) {
      dispatch(getRoomsList(email));

      if (!privateRoom) {
        dispatch(roomCreated(true));
      }
    } else {
      dispatch(createError('The name already used, create another name.'));
    }
  }).catch(err => console.log(err));
};

export const sendUserDetails = details => (dispatch) => {
  axios.post(`${host}:8080/register_user`, { details })
    .then((res) => {
      if (res.data.error) {
        dispatch(createError(res.data.error));
      }
      if (res.data === true) {
        dispatch(createError(''));
        sessionStorage.setItem('connState', details.email);
        dispatch(setEmail(details.email));
      }
    }).catch((err) => {
      console.log(err, 'ERROR');
    });
};

export const getUsersList = () => (dispatch) => {
  axios.get(`${host}:8080/clients_list`)
    .then((res) => {
      dispatch(renderClientsList(res.data));
    }).catch((err) => { console.log(err); });
};
