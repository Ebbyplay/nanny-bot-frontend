import { makeAutoObservable, observable } from 'mobx';

import { ApiService, StorageService } from '../Services';
import UserModel from '../Models/UserModel';

class UserStore {
    constructor() {
        makeAutoObservable(this);
    }

    isLoading = false;
    errors = null;

    currentUser = StorageService.get('currentUser');
    userInProcess = StorageService.get('userInProcess');
    userMap = observable.map()

    get users() {
        return this.userMap.toJSON();
    }

    load() {
        this.setErrors(null);
        this.setIsLoading(true);

        return ApiService.getUsers()
            .then((res) => {
                if (!res || !res.data ) {
                    let error = new Error('userStore load: some error message');
                    this.setErrors(error);
                    throw error;
                }

                this.userMap.clear();
                res.data.forEach((task) => this.set(task));
            })
            .catch((err) => {
                this.setErrors(err);
                throw err;
            })
            .finally(() => {
                this.setErrors(null);
                this.setIsLoading(false);
            })
    }

    set(user) {
        let userModel = new UserModel(this);
        userModel.init(user);

        this.userMap.set(userModel.uuid, userModel);
    }

    get(uuid) {
        return this.userMap.get(uuid);
    }

    add(user) {
        this.setErrors(null);
        this.setIsLoading(true);

        return ApiService.addUser(user)
            .then((res) => {
                if (!res || !res.data ) {
                    let error = new Error('userStore add: some error message');
                    this.setErrors(error);
                    throw error;
                }

                this.set(res.data);
                return this.get(res.data.uuid);
            })
            .catch((err) => {
                this.setErrors(err);
                throw err;
            })
            .finally(() => {
                this.setErrors(null);
                this.setIsLoading(false);
            })
    }

    update(user) {
        this.setErrors(null);
        this.isLoading(true);

        return ApiService.updateUser(user)
            .then((res) => {
                if (!res || !res.data) {
                    let error = new Error('userStore update: some error message');
                    this.setErrors(error);
                    throw error;
                }

                this.set(res.data);
                return this.get(res.data.uuid);
            })
            .catch((err) => {
                this.setErrors(err);
                throw err;
            })
            .finally(() => {
                this.setErrors(null);
                this.isLoading(true);
            });
    }

    delete(uuid) {
        this.setErrors(null);
        this.setIsLoading(true);

        return ApiService.deleteUser(uuid)
            .then((res) => {
                if (!res || !res.data) {
                    let error = new Error('userStore delete: some error message');
                    this.setErrors(error);
                    throw error;
                }

                this.userMap.delete(uuid);
            })
            .catch(((err) => {
                this.loadTasks();
                throw err;
            }))
            .finally(() => {
                this.setErrors(null);
                this.setIsLoading(false);
            });
    }

    setUser(key, uuid) {
        this[key] = uuid;
        StorageService.set(key, uuid);
    }

    unsetUser(key) {
        this[key] = null;
        StorageService.unset(key);
    }

    setIsLoading(isLoading) {
        this.isLoading = isLoading;
    }

    setErrors(errors) {
        this.errors = errors;
    }
}

export default new UserStore();
