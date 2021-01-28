//import EVENT_NAMES from '../config/socket.Cfg';

class RealTimeSocket 
{
    static socket = null;
    
    static getInstance()
    {
        if (this.socket === null)
        {
            this.socket = new WebSocket(`${process.env.REACT_APP_HOST}`);
        }
        return this.socket;
    }   
}

export default RealTimeSocket;
