
const setupSocket = () =>{
    const socket = new WebSocket(`${process.env.REACT_APP_HOST}`);
    return (dispatch) =>{
        dispatch({
            type: "socket/setupsocket",
            action: socket
        })
    } 
};

module.exports = {
    setupSocket,
}