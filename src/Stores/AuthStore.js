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
        password: ''
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

    clear() {
        for (let key in this.user) {
            this[key] = '';
        }
    }

    login() {
        this.isLoading = true;
        this.errors = null;

        return ApiService.login(this.user)
            .then((res) => {
                if (!res || !res.data || !res.data.id) {
                    this.errors = "E-Mail oder Passwort falsch!";
                    throw Error;
                }

                UserStore.setUser(res.data);
            })
            .catch((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                throw err;
            })
            .finally(() => {
                this.errors = null;
                this.isLoading = false;
            })
    }

    signup() {
        this.isLoading = true;
        this.error = null;

        return ApiService.signup(this.user)
        .then((res) => {
            if (!res || !res.data || !res.data.id) {
                throw Error;
            }
        })
        .catch((err) => {
            this.errors = err.response && err.response.body && err.response.body.errors;
            throw err;
        })
        .finally(() => {
            this.errors = null;
            this.isLoading = false;
        })
    }

    logout() {
        UserStore.unsetUser();
        return Promise.resolve()
    }
}

export default new AuthStore();
