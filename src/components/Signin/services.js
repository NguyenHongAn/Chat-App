import axiosInstance from '../../api';

class Service
{
    static async login(username, password){
        const response = await axiosInstance.post('/auth/signin',{
            username,
            password
        });
    }
}

export default Service;