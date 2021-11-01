/**
 * API - Handling
 */

import axios from 'axios';
import { UserStore } from '../Stores';

const 
    host = 'https://nannybot.de',
    port = 8443;

// todo: bearer
// axios.config({})

class ApiService {
    getUserUUID() {
        if (!UserStore.userInProcess)
            return UserStore.userInProcess;

        return UserStore.currentUser;
    }

    /** POST CALLS */
    login(data) {
        return axios.post(`${host}:${port}/login`, data)
    }

    signupMain(data) {
        return axios.post(`${host}:${port}/login/register/mainAccount`, data)
    }

    signupSub(data) {
        return axios.post(`${host}:${port}/login/register/subAccount`, data)
    }

    /** GET CALLS */

    getSubAccountsByMainAccount() {
        return axios.get(`${host}:${port}/subaccount/getAll/${this.getUserUUID()}`)
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

    getImages() {
        return axios.get(`${host}:${port}/images/getAll`)
    }

    /** PUT CALLS */

    updateTask(task) {
        return axios.put(`${host}:${port}/task/update`, {
            taskId: task.uuid,
            name: task.name,
            description: task.description,
            repetition: task.repetition,
            weight: task.weight
        })
    }

    /** DELETE CALLS */

}

export default new ApiService();
