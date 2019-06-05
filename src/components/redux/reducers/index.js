/* eslint-disable no-case-declarations */
const initialState = {
  messages: [],
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case 'SEND_MESS':
      // eslint-disable-next-line no-case-declarations
      console.log(`send mess ${action.payload}`);
      const { messages } = state;
      // console.log(state);
      // messages.push(action.payload);
      const arr = [...messages, action.payload];
      return { ...state, messages: arr };
    default:
      return state;
  }
}
