import axios from 'axios';

export const renderMess = message => ({ type: 'RENDER_MESS', payload: message });

export const rerenderMessage = messages => ({ type: 'RERENDER_MESSAGE', payload: messages });

export const changeConnState = connectionState => ({ type: 'CHANGE_CONNECTION_STATE', payload: connectionState });

export const setEmail = email => ({ type: 'SET_EMAIL', payload: email });

export const renderClientsList = clientsList => ({ type: 'RENDER_CLIENTS_LIST', payload: clientsList });

export const changeRoomsList = roomsList => ({ type: 'CHANGE_ROOMS_LIST', payload: roomsList });

export const changeRoom = room => ({ type: 'CHANGE_ROOM', payload: room });

export const createError = errorText => ({ type: 'CREATE_ERROR', payload: errorText });

export const roomCreated = isCreated => ({ type: 'ROOM_CREATED', payload: isCreated });

export const resetNewMessages = roomName => ({ type: 'RESET_NEW_MESSAGES', payload: roomName });

const host = 'http://localhost';

export const getRoomsList = email => (dispatch) => {
  axios.get(`${host}:8080/rooms`, {
    params: { email },
  }).then((res) => {
    dispatch(changeRoomsList(res.data));
  }).catch((err) => { console.log(err); });
};

export const logInUser = (email, password) => (dispatch) => {
  axios.post(`${host}:8080/login`, {
    email,
    password,
  },
  {
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
  axios.post(`${host}:8080/join_to_room`, { roomName })
    .then((res) => {
      dispatch(rerenderMessage(res.data));
    }).catch((err) => { console.log(err); });
};

export const createRoom = (addingPeople, roomName, email) => (dispatch) => {
  axios.post(`${host}:8080/create_room`, { addingPeople, roomName, email })
    .then((res) => {
      if (res.data.isCreated === true) {
        dispatch(getRoomsList(email));
        dispatch(roomCreated(true));
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
