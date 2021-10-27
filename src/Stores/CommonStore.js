import { makeAutoObservable } from 'mobx';

import { StorageService } from '../Services';

class CommonStore {
    constructor() {
        makeAutoObservable(this);
    }

    appName = 'NannyBot';
    token = StorageService.get('jwt');

    setToken(token) {
        this.token = token;
        StorageService.set('jwt', token);
    }

    unsetToken() {
        this.token = null;
        StorageService.unset('jwt');
    }
}

export default new CommonStore();
