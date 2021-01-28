const defaultState = {
    socket: null,
    message: "",
    thread: [],
    currentThread: {}
}

const chatReducer = (state = defaultState, action) =>{
    switch (action.type) {
        case "socket/setupsocket": 
        return {
            ...state,
            socket: action.payload,
        }
        default:
            return state;
    }
}

export default chatReducer;