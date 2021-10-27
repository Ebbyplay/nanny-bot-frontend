/**
 * API - Handling
 */

import axios from 'axios';
import { UserStore } from '../Stores';

 const 
    host = 'https://nannybot.de',
    port = 8443;

class ApiService {
    getUserID() {
        return UserStore.currentUser.id;
    }

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


    getTasks() {
        return axios.get(`${host}:${port}/task/getAll/${this.getUserID()}`)
    }

    getRewards() {
        return axios.get(`${host}:${port}/reward/getAll/${this.getUserID()}`)
    }

}

export default new ApiService();
