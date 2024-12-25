import Axios from '../config/httpMethods.js'

class UserService{
    async getUser(){
        return await Axios.get('/users/current-user')
    };
    async changePassword(data){
        return await Axios.patch('/users/change-password', data)
    };
    async getUserProfile(){
        return await Axios.get('/users/author-profile')
        
    };
}
export default new UserService()