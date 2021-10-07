/**
 * API Call Handling
 */

import axios from 'axios';

/**
 * login call
 * @param {String} email 
 * @param {String} password 
 * @returns 
 */
export const login = (email, password) => {
    return axios.post('http://localhost:8081/login', {
        email: email,
        password: password
    })
}

/**
 * signup mainaccount call
 * @param {String} email 
 * @param {String} password 
 * @returns 
 */
export const signupMain = (username, email, password) => {
    return axios.post('http://localhost:8081/register/mainAccount', {
        name: username,
        email: email,
        password: password
    })
}

/**
 * signup subaccount call
 * @param {String} email 
 * @param {String} password 
 * @param {String} parentId 
 * @returns 
 */
export const singupSub = (username, password, parentId) => {
    return axios.post('http://localhost:8081/register/subAccount', {
        name: username,
        password: password,
        parentId: parentId
    })
}

/**
 * create task call
 * @param {String} userId 
 * @param {String} name 
 * @param {String} repetition 
 * @param {Integer} weight 
 * @returns
 */
export const createTask = (userId, name, repetition, weight) => {
    return axios.post('http://localhost:8081/task/create', {
        mainAccountId: userId,
        name: name,
        repetition: repetition,
        weight: weight
    })
}

/**
 * update task call
 * @param {String*} taskId 
 * @param {String} name 
 * @param {String} repetition 
 * @param {Integer} weight 
 * @returns 
 */
export const updateTask = (taskId, name, repetition, weight) => {
    return axios.put('http://localhost:8081/task/update', {
        uuid: taskId,
        name: name,
        repetition: repetition,
        weight: weight
    })
}

/**
 * delete task call
 * @param {String} taskId
 * @returns 
 */
export const deleteTask = (taskId) => {
    return axios.delete('http://localhost:8081/task/delete', taskId)
}

/**
 * get tasks call
 * @param {String} userId
 * @returns 
 */
export const getTasks = (userId) => {
    return axios.get(`http://localhost:8081/task/getAll/${userId}`)
}

/**
 * create reward call
 * @param {String} userId 
 * @param {String} name 
 * @param {Integer} cost 
 * @returns 
 */
export const createReward = (userId, name, cost) => {
    return axios.post('http://localhost:8081/reward/create', {
        creatorId: userId,
        name: name,
        cost: cost
    })
}

/**
 * update reward call
 * @param {String} rewardId 
 * @param {String} name 
 * @param {Integer} cost 
 * @returns 
 */
export const updateReward = (rewardId, name, cost) => {
    return axios.put('http://localhost:8081/reward/create', {
        rewardId: rewardId,
        name: name,
        cost: cost
    })
}

/**
 * delete reward call
 * @param {String} rewardId
 * @returns 
 */
export const deleteReward = (rewardId) => {
    return axios.delete('http://localhost:8081/reward/delete', rewardId)
}

/**
 * get rewards call
 * @param {String} userId 
 * @returns 
 */
export const getReward = (userId) => {
    return axios.delete(`http://localhost:8081/reward/getAll/${userId}`)
}

/**
 * get sub accounts call
 * @param {String} userId 
 * @returns 
 */
export const getAllSubAccounts = (userId) => {
    return axios.get(`http://localhost:8081/subaccount/getAll/${userId}`)
}

/**
 * get sub account points call
 * @param {String} userId 
 * @returns 
 */
export const getPoints = (userId) => {
    return axios.get(`http://localhost:8081/subaccount/points/${userId}`)
}