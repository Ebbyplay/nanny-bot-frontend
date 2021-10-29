import { makeAutoObservable, observable } from 'mobx';

import { ApiService, StorageService } from '../Services';

class UserStore {
    constructor() {
        makeAutoObservable(this);
    }

    currentUser = StorageService.get('user');
    userMap = observable.map()

    get users() {
        return this.userMap.toJSON();
    }

    setCurrentUser(user) {
        this.currentUser = user;
        StorageService.set('user', user);
    }

    unsetCurrentUser() {
        this.currentUser = null;
        StorageService.unset('user');
    }

    set(user) {
        this.userMap.set(user.uuid, user);
    }

    get(uuid) {
        return this.userMap.get(uuid);
    }

    add(user) {
        return ApiService.addUser(user)
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.set(res.data);
                return this.get(res.data.uuid);
            })
    }

    async update(user) {
        const res = await ApiService.updateUser(user);

        if (!res || !res.data)
            throw Error;

        if (user.id === this.currentUser.id)
            this.currentUser = res.data;

        this.set(res.data);
        return this.get(res.data.uuid);
    }

    delete(uuid) {
        return ApiService.deleteUser(uuid)
        .then((res) => {
            if (!res || !res.data )
                throw Error;

            this.userMap.delete(uuid);
        })
        .catch(((err) => {
            this.loadTasks();
            throw err;
        }));
    }
}

export default new UserStore();
