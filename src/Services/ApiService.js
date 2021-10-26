/**
 * API - Handling
 */

import axios from 'axios';

 const 
    host = 'https://nannybot.de',
    port = 8443;

class ApiService {
    login(data) {
        return axios.post(`${host}:${port}/login`, data)
    }

   signupMain(data) {
        return axios.post(`${host}:${port}/login/register/mainAccount`, data)
    }

   signupSub(data) {
        return axios.post(`${host}:${port}/login/register/subAccount`, data)
    }

    getSubAccountsByMainAccount(parentId) {
        return axios.get(`${host}:${port}/subaccount/getAll/${parentId}`)
    }


    getTasks(userId) {
        return axios.get(`${host}:${port}/task/getAll/${userId}`)
    }

}

export default new ApiService();
