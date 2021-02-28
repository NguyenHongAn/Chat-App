const updateJwtToken = (jwtToken) =>{
    return (dispatch)=>{
        dispatch({
            type: 'auth/updateJwt',
            payload: jwtToken,
        })
    }
};

module.exports ={
    updateJwtToken
}