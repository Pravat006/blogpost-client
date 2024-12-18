import Axios from '../config/httpMethods.js'

class AuthService{
    async login(data){
        return await Axios.post('/users/login', data)
    };
    async register(data){
        return await Axios.post('/users/register', data)
    };
    async logout(){
        return await Axios.get('/users/logout')
    };
}
export default new AuthService()