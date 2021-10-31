/**
 * Storage - Handling
 */

class StorageService {
    get(key) {
        return JSON.parse(sessionStorage.getItem(key));
    }

    set(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    unset(key) {
        sessionStorage.removeItem(key);
    }

    clear() {
        sessionStorage.clear();
    }
}

export default new StorageService();
