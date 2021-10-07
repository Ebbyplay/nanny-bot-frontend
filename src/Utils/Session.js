/**
 * SessionStorage Handling
 */

/**
 * 
 * @param {String} key 
 * @returns 
 */
export const getSessionStorage = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
}

/**
 * 
 * @param {String} key 
 * @param {*} value 
 */
export const setSessionStorage = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
}

/**
 * 
 * @param {String} key 
 */
export const unsetSessionStorage = (key) => {
    sessionStorage.removeItem(key);
}