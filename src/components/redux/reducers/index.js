/* eslint-disable no-case-declarations */
const initialState = {
  messages: [],
  connectionState: false,
  clientsList: [],
  email: '',
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case 'RENDER_MESS':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case 'CHANGE_CONNECTION_STATE':
      console.log('connection state', action.payload, '-----------------------');
      return { ...state, connectionState: action.payload };

    case 'RENDER_CLIENTS_LIST':
      return { ...state, clientsList: action.payload };

    case 'SET_EMAIL':
      return { ...state, email: action.payload };

    default:
      return state;
  }
}
