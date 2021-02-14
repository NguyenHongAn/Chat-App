
const initialState  = {
    jwtToken: "",
} 

const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "auth/updateToken":   
        return {
            ...state,
            token: action.payload,
        }
        default:
           return state;
    }
}

export default authReducer;