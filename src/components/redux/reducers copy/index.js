/* eslint-disable no-case-declarations */
const initialState = {
  messages: [],
  connectionState: false,
  clientsList: [],
  roomsList: [],
  email: null,
  roomName: 'general',
  error: '',
  wasRoomCreated: false,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case 'RENDER_MESS':
      return { ...state, messages: [...state.messages, action.payload] };

    case 'RERENDER_MESSAGE':
      return { ...state, messages: action.payload };

    case 'CHANGE_CONNECTION_STATE':
      return { ...state, connectionState: action.payload };

    case 'RENDER_CLIENTS_LIST':
      return { ...state, clientsList: action.payload };

    case 'CHANGE_ROOMS_LIST':
      return { ...state, roomsList: action.payload };

    case 'CHANGE_ROOM':
      return { ...state, roomName: action.payload };

    case 'SET_EMAIL':
      return { ...state, email: action.payload };

    case 'GET_ROOMS_LIST':
      return { ...state, roomsList: action.payload };

    case 'CREATE_ERROR':
      return { ...state, error: action.payload };

    case 'ROOM_CREATED':
      return { ...state, wasRoomCreated: action.payload };

    default:
      return state;
  }
}
