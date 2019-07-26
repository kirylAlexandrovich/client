const initialState = {
  email: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };

    default:
      return state;
  }
}
