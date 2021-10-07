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
    return axios.post('http://localhost:8081/login/register/mainAccount', {
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
    return axios.post('http://localhost:8081/login/register/subAccount', {
        name: username,
        password: password,
        parentId: parentId
    })
}