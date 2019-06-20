export const sendMess = message => ({ type: 'RENDER_MESS', payload: message });

export const changeConnState = connectionState => ({ type: 'CHANGE_CONNECTION_STATE', payload: connectionState });

export const setEmail = email => ({ type: 'SET_EMAIL', payload: email });
