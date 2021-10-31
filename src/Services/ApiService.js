/**
 * API - Handling
 */

import axios from 'axios';
import { UserStore } from '../Stores';

 const 
    host = 'https://nannybot.de',
    port = 8443;

class ApiService {
    getUserUUID() {
        if (!UserStore.userInProcess)
            return UserStore.userInProcess;

        return UserStore.currentUser;
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
        return axios.get(`${host}:${port}/family/getAll/${this.getUserUUID()}`)
    }

    getTasks() {
        return axios.get(`${host}:${port}/task/getAll/${this.getUserUUID()}`)
    }

    getRewards() {
        return axios.get(`${host}:${port}/reward/getAll/${this.getUserUUID()}`)
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
