import { makeAutoObservable, observable } from 'mobx';

import { ApiService } from '../Services';
import TaskModel from '../Models/TaskModel';

class TaskStore {
    constructor() {
        makeAutoObservable(this);
    }

    isLoading = false;
    errors = null;

    tasksMap = observable.map();

    get tasks() {
        return this.tasksMap.toJSON();
    }

    load() {
        this.setErrors(null);
        this.setIsLoading(true);

        return ApiService.getTasks()
            .then((res) => {
                if (!res || !res.data ) {
                    let error = new Error('taskStore load: some error message');
                    this.setErrors(error);
                    throw error;
                }

                this.tasksMap.clear();
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

    set(task) {
        let taskModel = new TaskModel(this);
        taskModel.init(task);

        this.tasksMap.set(taskModel.uuid, taskModel);
    }

    get(uuid) {
        return this.tasksMap.get(uuid)
    }

    add(task) {
        this.setErrors(null);
        this.setIsLoading(true);

        return ApiService.createTask(task)
            .then((res) => {
                if (!res || !res.data) {
                    let error = new Error('taskStore add: some error message');
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
                this.setIsLoading(true);
            })
    }

    update(task) {
        this.setErrors(null);
        this.isLoading(true);

        return ApiService.updateTask(task)
            .then((res) => {
                if (!res || !res.data) {
                    let error = new Error('taskStore update: some error message');
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
        this.isLoading(true);

        return ApiService.deleteTask(uuid)
            .then((res) => {
                if (!res || !res.data) {
                    let error = new Error('taskStore delete: some error message');
                    this.setErrors(error);
                    throw error;
                }

                this.tasksMap.delete(uuid);
            })
            .catch(((err) => {
                this.loadTasks();
                throw err;
            })).finally(() => {
                this.setErrors(null);
                this.isLoading(true);
            });
    }

    clear() {
        this.tasksMap.clear();
    }

    setIsLoading(isLoading) {
        this.isLoading = isLoading;
    }

    setErrors(errors) {
        this.errors = errors;
    }
}

export default new TaskStore();
