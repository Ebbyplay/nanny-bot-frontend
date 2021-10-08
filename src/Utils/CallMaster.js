/**
 * API Call Handling
 */

import axios from 'axios';
import { getSessionStorage } from './Session';

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

/**
 * signup subaccount call
 * @param {String} title 
 * @param {String} repitition 
 * @param {String} points 
 * @returns 
 */
export const createTask = (title, description, repitition, points) => {

    let user = getSessionStorage('user')

    return axios.post('http://localhost:8081/task/create', {
        creatorId: user.id,
        name: title,
        description: description,
        repetition: repitition,
        weight: points
    })
}