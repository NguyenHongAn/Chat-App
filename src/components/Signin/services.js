import axiosInstance from '../../api';

const HOST = process.env.REACT_APP_APIURL;
class Service
{
    static async login(username, password){
        try {
            const response = await axiosInstance.post("/auth/signin",{
                username,
                password
            }); 

            return ["success", response.data];
        } catch (error) {
            return ["Failed"];
        }
    }

    static loginWithGoogleAccount(){
        // try {
            //console.log({axiosInstance});
            return window.open(HOST + "/auth/google", "_self",       
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
            scrollbars=no, resizable=no, copyhistory=no, `
            );
        //     const response = await axiosInstance.get("/auth/google");
        //     return ["success", response.data];
        // } catch (error) {
        //     return ["Failed"];
        // }
    }
}

export default Service;