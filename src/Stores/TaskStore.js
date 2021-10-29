import { makeAutoObservable, observable } from 'mobx';

import { ApiService } from '../Services';
import TaskModel from '../Models/TaskModel';

class TaskStore {
    constructor() {
        makeAutoObservable(this);
    }

    isLoading = false;
    tasksMap = observable.map();

    get tasks() {
        return this.tasksMap.toJSON();
    }

    load() {
        this.isLoading = true;

        return ApiService.getTasks()
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.tasksMap.clear();
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

    set(task) {
        let taskModel = new TaskModel(this);
        taskModel.init(task);

        this.tasksMap.set(taskModel.uuid, taskModel);
    }

    get(uuid) {
        return this.tasksMap.get(uuid)
    }

    add(task) {
        return ApiService.createTask(task)
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.set(res.data);
                return this.get(res.data.uuid);
            })
    }

    async update(task) {
        const res = await ApiService.updateTask(task);

        if (!res || !res.data)
            throw Error;

        this.set(res.data);
        return this.get(res.data.uuid);
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

    clear() {
        this.tasksMap.clear();
    }
}

export default new TaskStore();
