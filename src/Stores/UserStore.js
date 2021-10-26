import { makeAutoObservable } from 'mobx';

import { /*ApiService,*/ StorageService } from '../Services';

class UserStore {
    constructor() {
        makeAutoObservable(this);
    }

    currentUser = StorageService.get('user');
    mainAccounts = [];
    subAccounts = [];

    getMainAccount(id) {
        return this.mainAccounts.find((account) => account.id = id);
    }

    getSubAccount(id) {
        return this.subAccounts.find((account) => account.id = id);
    }

    setUser(user) {
        this.currentUser = user;
        StorageService.set('user', user);
    }

    setMainAccounts(mainAccounts) {
        this.mainAccounts = mainAccounts;
    }

    setSubAccounts(subAccounts) {
        this.subAccounts = subAccounts;
    }

    unsetUser() {
        this.currentUser = null;
        StorageService.unset('user');
    }

    unsetMainAccounts() {
        this.mainAccounts = [];
    }

    unsetSubAccounts() {
        this.subAccounts = [];
    }

    addMainAccount(mainAccount) {
        // TODO: api call => wenn success dann
        this.mainAccounts.push(mainAccount);
    }

    addSubAccount(subAccount) {
        // api call
        this.subAccounts.push(subAccount);
    }

    removeMainAccount(mainAccount) {
        // api call
        this.mainAccounts.splice(this.mainAccounts.indexOf(mainAccount), 1);
    }

    removeSubAccount(subAccount) {
        // api call
        this.subAccounts.splice(this.subAccounts.indexOf(subAccount), 1);
    }

    editCurrentUser(currentUser) {
        // api call
        this.currentUser = currentUser;
    }

    editMainAccount(mainAccount) {
        // api call
        this.mainAccounts[this.mainAccounts.indexOf(mainAccount)] = mainAccount;
    }

    editSubAccount(subAccount) {
        // api call
        this.subAccounts[this.subAccounts.indexOf(subAccount)] = subAccount;
    }
}

export default new UserStore();
