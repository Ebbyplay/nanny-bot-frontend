import { makeAutoObservable, observable } from 'mobx';

import { ApiService } from '../Services';

class TaskStore {
    constructor() {
        makeAutoObservable(this);
    }

    isLoading = false;
    tasks = observable.map();

    loadTasks() {
        this.isLoading = true;

        return ApiService.getTasks()
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.tasks.clear();
                res.data.forEach(task => this.tasks.set(task.uuid, task));
            })
            .catch((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                throw err;
            })
            .finally(() => {
                this.isLoading = false;
            })
    }

    getTask(uuid) {
        return this.tasks.get(uuid)
    }

    addTask(task) {
        return ApiService.createTask(task)
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.tasks.set(res.data.uuid, res.data);
                return res.data;
            })
    }

    updateTask(task) {
        return ApiService.updateTask(task)
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.tasks.set(res.data.uuid, res.data);
                return res.data;
            })
    }

    deleteTask(uuid) {
        return ApiService.deleteTask(uuid)
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.tasks.delete(uuid);
            })
            .catch(((err) => {
                this.loadTasks();
                throw err;
            }));
    }

    verifyTask(uuid) {
        // api call
    }

    checkTask(uuid) {
        // api call
    }

    uncheckTask(uuid) {
        // api call
    }

    clear() {
        this.tasks.clear();
    }
}

export default new TaskStore();
