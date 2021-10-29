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
        if (!UserStore.currentUser)
            return UserStore.userInProcess.id;

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

    // TODO
    getUsers() {
        return axios.get(`${host}:${port}/????/${this.getUserID()}`)
    }

    getTasks() {
        return axios.get(`${host}:${port}/task/getAll/${this.getUserID()}`)
    }

    getRewards() {
        return axios.get(`${host}:${port}/reward/getAll/${this.getUserID()}`)
    }

    updateTask(task) {
        return axios.put(`${host}:${port}/task/update`, {
            taskId: task.uuid,
            name: task.name,
            description: task.description,
            repetition: task.repetition,
            weight: task.weight
        })
    }

}

export default new ApiService();
