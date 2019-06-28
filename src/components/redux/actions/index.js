import axios from 'axios';

export const renderMess = message => ({ type: 'RENDER_MESS', payload: message });

export const rerenderMessage = messages => ({ type: 'RERENDER_MESSAGE', payload: messages });

export const changeConnState = connectionState => ({ type: 'CHANGE_CONNECTION_STATE', payload: connectionState });

export const setEmail = email => ({ type: 'SET_EMAIL', payload: email });

export const changeRoomsList = roomsList => ({ type: 'CHANGE_ROOMS_LIST', payload: roomsList });

export const changeRoom = room => ({ type: 'CHANGE_ROOM', payload: room });

export const error = errorText => ({ type: 'CREATE_ERROR', payload: errorText });

export const roomCreated = isCreated => ({ type: 'ROOM_CREATED', payload: isCreated });

export const getRoomsList = email => (dispatch) => {
  console.log(email, 'get rooms email');
  axios.get('http://localhost:8080/rooms', {
    params: { email },
  }).then((res) => {
    dispatch(changeRoomsList(res.data));
  }).catch((err) => { console.log(err); });
};

export const logInUser = (email, password) => (dispatch) => {
  axios.post('http://localhost:8080/login', {
    email,
    password,
  },
  {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.data === 'no such client') {
      dispatch(error('Incorrect email or password'));
      return;
    }
    sessionStorage.setItem('connState', res.data.email);
    dispatch(setEmail(res.data.email));
  }).catch((err) => {
    console.log(err);
  });
};

export const getRoomMessages = roomName => (dispatch) => {
  dispatch(changeRoom(roomName));
  axios.post('http://localhost:8080/join_to_room', { roomName })
    .then((res) => {
      res.data.forEach((el) => {
        dispatch(rerenderMessage(el));
      });
    }).catch((err) => { console.log(err); });
};

export const createRoom = (addingPeople, roomName, email) => (dispatch) => {
  axios.post('http://localhost:8080/create_room', { addingPeople, roomName, email })
    .then((res) => {
      if (res.data.isCreated === true) {
        dispatch(getRoomsList(email));
        dispatch(roomCreated(true));
        // this.toggle();
      } else {
        dispatch(error('The name already used, create another name.'));
        // this.setState({ nameError: 'The name already used, create another name.' });
      }
    }).catch(err => console.log(err));
};
