const initialState = {
    messages: [{
        name: '12345',
        mess: 'HEllo',
        time: "03 Jun 2019 16:30:11"
    }],
}

export default function reducers(state = initialState, action) {
    switch(action.type) {
        case 'SEND_MESS':
            // eslint-disable-next-line no-case-declarations
            const {messages} = state;
            // console.log(state);
            messages.push(action.payload);
            return {...state, messages};
        default: 
            return state;
    }
}

