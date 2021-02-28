class Service
{
    static validatePassword(password, rePassword){
        // if (password.length ===0 || rePassword.length===0)
        // {
        //     return []
        // }
        if (password < 6)
        {
            return ["Failed", "password have at least 6 characters"];
        }
        if (password >= 16)
        {
            return ["Failed", "password is too long, it must less than 16 characters "];
        }
        if (rePassword.length > 0 && password !== rePassword)
        {
            return ["Failed", "passwords does not match"];
        }
        return ["Success"];
    }
}

export default Service;