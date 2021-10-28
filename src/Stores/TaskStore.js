import { makeAutoObservable, observable } from 'mobx';

import { ApiService } from '../Services';

class TaskStore {
    constructor() {
        makeAutoObservable(this);
    }

    isLoading = false;
    tasksMap = observable.map();

    get tasks() {
        return this.tasksMap.values();
    }

    load() {
        this.isLoading = true;

        return ApiService.getTasks()
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.tasksMap.clear();
                this.set(res.data)
            })
            .catch((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                throw err;
            })
            .finally(() => {
                this.isLoading = false;
            })
    }

    set(tasks) {
        tasks.forEach((task) => this.tasksMap.set(task.uuid, task));
    }

    get(uuid) {
        return this.tasksMap.get(uuid)
    }

    add(task) {
        return ApiService.createTask(task)
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.tasksMap.set(res.data.uuid, res.data);
                return res.data;
            })
    }

    update(task) {
        return ApiService.updateTask(task)
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.tasksMap.set(res.data.uuid, res.data);
                return res.data;
            })
    }

    delete(uuid) {
        return ApiService.deleteTask(uuid)
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.tasksMap.delete(uuid);
            })
            .catch(((err) => {
                this.loadTasks();
                throw err;
            }));
    }

    verify(uuid) {
        // api call
    }

    check(uuid) {
        // api call
    }

    uncheck(uuid) {
        // api call
    }

    clear() {
        this.tasksMap.clear();
    }
}

export default new TaskStore();
