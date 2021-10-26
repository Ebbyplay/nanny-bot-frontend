// todo

class StorageService {
    /**
     * 
     * @param {String} key 
     * @returns 
     */
    get(key) {
        return JSON.parse(sessionStorage.getItem(key));
    }

    /**
     * 
     * @param {String} key 
     * @param {*} value 
     */
    set(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * 
     * @param {String} key 
     */
    unset(key) {
        sessionStorage.removeItem(key);
    }

    /**
     * 
     */
    clear() {
        sessionStorage.clear();
    }
}

export default new StorageService();
