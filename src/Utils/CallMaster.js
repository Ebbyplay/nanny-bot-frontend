/**
 * API Call Handling
 */

import axios from 'axios';

var baseUrl = "http://localhost:8081/";
/**
 * login call
 * @param {String} email 
 * @param {String} password 
 * @returns 
 */
export const login = (email, password) => {
    return axios.post(baseUrl + 'login', {
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
    return axios.post(baseUrl + 'login/register/mainAccount', {
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
    return axios.post(baseUrl + 'login/register/subAccount', {
        name: username,
        password: password,
        parentId: parentId
    })
}

/**
 * Fetch all Rewards
 * @param {String} creatorId 
 * @returns 
 */
export const getRewards = (creatorId) => {
    return axios.get(baseUrl + 'reward/getAll/' + creatorId, {
        creatorId: Number(creatorId)
    });
}