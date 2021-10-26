import { makeAutoObservable } from 'mobx';

class UserStore {
    constructor() {
        makeAutoObservable(this);
    }

    currentUser = null;

    setUser(user) {
        this.currentUser = user;
    }
}

export default new UserStore();