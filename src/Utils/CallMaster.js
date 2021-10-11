/**
 * API Call Handling
 */

import axios from 'axios';

const host = 'https://www.nannybot.de:8443';

/**
 * login call
 * @param {String} email 
 * @param {String} password 
 * @param {*} parentId 
 * @returns 
 */
export const login = (email, password, parentId = null) => {
    return axios.post(`${host}/login`, {
        email: email,
        password: password,
        parentId: parentId
    })
}

/**
 * signup mainaccount call
 * @param {String} username 
 * @param {String} email 
 * @param {String} password 
 * @param {String} repassword 
 * @returns 
 */
export const signupMain = (username, email, password, repassword) => {
    return axios.post(`${host}/register/mainAccount`, {
        name: username,
        email: email,
        password: password,
        repassword: repassword
    })
}

/**
 * signup subaccount call
 * @param {String} parentId 
 * @param {String} username
 * @param {String} password 
 * @returns 
 */
export const signupSub = (parentId, username, password) => {
    return axios.post(`${host}/register/subAccount`, {
        parentId: parentId,
        name: username,
        password: password
    })
}

/**
 * get all SubAccounts by MainAccount
 * @param {String} parentId 
 * @returns 
 */
export const getSubAccsByMainAcc = (parentId) => {
    return axios.get(`${host}/subaccount/getAll/${parentId}`)
}

/**
 * create task call
 * @param {String} userId 
 * @param {String} title 
 * @param {String} description 
 * @param {String} repetition 
 * @param {Integer} weight 
 * @returns
 */
export const createTask = (userId, title, description, repetition, weight) => {
    return axios.post(`${host}/task/create`, {
        creatorId: userId,
        name: title,
        description: description,
        repetition: repetition,
        weight: weight
    })
}

/**
 * update task call
 * @param {String} taskId 
 * @param {String} title 
 * @param {String} description 
 * @param {String} repetition 
 * @param {Integer} weight 
 * @returns 
 */
export const updateTask = (taskId, title, description, repetition, weight) => {
    return axios.put(`${host}/task/update`, {
        taskId: taskId,
        name: title,
        description: description,
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
    return axios.delete(`${host}/task/delete/` + taskId)
}

/**
 * get tasks call
 * @param {String} userId
 * @returns 
 */
export const getTasks = (userId) => {
    return axios.get(`${host}/task/getAll/${userId}`)
}

/**
 * get tasks call
 * @param {String} taskID
 * @returns 
 */
export const getTask = (taskID) => {
    return axios.get(`${host}/task/get/${taskID}`)
}

/**
 * get user_tasks call
 * @param {String} userId 
 * @returns 
 */
export const getUser_Tasks = (userId) => {
    return axios.get(`${host}/user_task/findAllAsignedTasks/${userId}`)
}

/**
 * create reward call
 * @param {String} userId 
 * @param {String} name 
 * @param {Integer} cost 
 * @returns 
 */
export const createReward = (userId, name, cost) => {
    return axios.post(`${host}/reward/create`, {
        creatorId: userId,
        name: name,
        cost: cost
    })
}

/**
 * get reward call
 * @param {String} rewardId 
 * @returns 
 */
export const getReward = (rewardId) => {
    return axios.get(`${host}/reward/get/${rewardId}`)
}

/**
 * update reward call
 * @param {String} rewardId 
 * @param {String} name 
 * @param {Integer} cost 
 * @returns 
 */
export const updateReward = (rewardId, name, cost) => {
    return axios.put(`${host}/reward/update`, {
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
    return axios.delete(`${host}/reward/delete`, rewardId)
}

/**
 * get rewards call
 * @param {String} userId 
 * @returns 
 */
export const getRewards = (userId) => {
    return axios.get(`${host}/reward/getAll/${userId}`)
}


/**
 * get user_rewards call
 * @param {String} userId 
 * @returns 
 */
export const getUser_Rewards = (userId) => {
    return axios.get(`${host}/user_reward/getAll/${userId}`)
}

/**
 * claim user_reward call
 * @param {String} user_rewardId 
 * @returns 
 */
export const claimUser_Reward = (user_rewardId) => {
    return axios.put(`${host}/user_reward/claim/${user_rewardId}`)
}

/**
 * UNclaim user_reward call
 * @param {String} user_rewardId 
 * @returns 
 */
export const unclaimUser_Reward = (user_rewardId) => {
    return axios.put(`${host}/user_reward/unclaim/${user_rewardId}`)
}

/**
 * get sub accounts call
 * @param {String} userId 
 * @returns 
 */
export const getAllSubAccounts = (userId) => {
    return axios.get(`${host}/subaccount/getAll/${userId}`)
}

/**
 * get sub account points call
 * @param {String} userId 
 * @returns 
 */
export const getPoints = (userId) => {
    return axios.get(`${host}/subaccount/points/${userId}`)
}