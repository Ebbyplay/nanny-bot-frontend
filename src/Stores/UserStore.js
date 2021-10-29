import { makeAutoObservable, observable } from 'mobx';

import { ApiService, StorageService } from '../Services';

class UserStore {
    constructor() {
        makeAutoObservable(this);
    }

    isLoading = false;

    userInProcess = StorageService.get('user_in_process');
    currentUser = StorageService.get('user');
    userMap = observable.map()

    get users() {
        return this.userMap.toJSON();
    }

    load() {
        this.isLoading = true;

        return ApiService.getUsers()
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.userMap.clear();
                res.data.forEach((task) => this.set(task));
            })
            .catch((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                throw err;
            })
            .finally(() => {
                this.isLoading = false;
            })
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

    setCurrentUser(user) {
        this.currentUser = user;
        StorageService.set('user', user);

        this.unsetUserInProcess();
    }

    unsetCurrentUser() {
        this.currentUser = null;
        StorageService.unset('user');
    }

    setUserInProcess(user) {
        this.userInProcess = user;
        StorageService.set('user_in_process', user);
    }

    unsetUserInProcess() {
        this.userInProcess = null;
        StorageService.unset('user_in_process');
    }
}

export default new UserStore();
