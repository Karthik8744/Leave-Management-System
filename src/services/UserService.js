import axios from 'axios'


const USERS_REST_API_URL = "http://localhost:8080/";
class UserService {
    allAccess(){
        return axios.get(USERS_REST_API_URL + 'getAll');
    }
    authenticateUser(){
        return axios.post(USERS_REST_API_URL + 'login');
    }
    addLeave(){
        return axios.post(USERS_REST_API_URL + 'addLeave')
    }

}

export default new UserService();