import { makeAutoObservable } from 'mobx';

import UserStore from './UserStore';
import { ApiService } from '../Services';

class AuthStore {
    constructor() {
        makeAutoObservable(this);
    }

    isLoading = false;
    errors = null;

    user = {
        username: '',
        email: '',
        password: '',
        rePassword: ''
    };

    setUsername(name) {
        this.user.username = name;
    }

    setEmail(mail) {
        this.user.email = mail;
    }

    setPassword(password) {
        this.user.password = password;
    }

    setRePassword(password) {
        this.user.rePassword = password;
    }

    clear() {
        for (let key in this.user) {
            this[key] = '';
        }
    }

    firstLogin() {
        this.setIsLoading(true);
        this.setErrors(null);

        return ApiService.login(this.user)
            .then((res) => {
                if (!res || !res.data || !res.data.id) {
                    let error = new Error('E-Mail oder Passwort falsch!');
                    this.setErrors(error);
                    throw error;
                }

                UserStore.setUser('userInProcess', res.data.id);
                UserStore.setUser('currentUser', res.data.id); // muss wieder raus
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

    secondLogin(user) {
        this.setErrors(null);
        this.setIsLoading(true);

        return ApiService.login(user)
            .then((res) => {
                if (!res || !res.data || !res.data.id) {
                    let error = new Error('Pin falsch!');
                    this.setErrors(error);
                    throw error;
                }

                UserStore.setUser('currentUser', res.data.id);
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

    signup() {
        this.setErrors(null);
        this.setIsLoading(true);

        return ApiService.signup(this.user)
            .then((res) => {
                if (!res || !res.data || !res.data.id) {
                    let error = new Error('authStore signup: some error message');
                    this.setErrors(error);
                    throw error;
                }
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

    logout() {
        UserStore.unsetUser('currentUser');
        UserStore.unsetUser('userInProcess'); // kann raus - sollte nach dem setzen von currentUser geloescht werden
        return Promise.resolve()
    }

    setErrors(errors) {
        this.errors = errors;
    }

    setIsLoading(isLoading) {
        this.isLoading = isLoading;
    }
}

export default new AuthStore();
