import { makeAutoObservable } from 'mobx';

// import { ApiService } from '../Services';

class TaskStore {
    constructor() {
        makeAutoObservable(this);
    }

    tasks = [];

    getTask(id) {
        return this.tasks.find((task) => task.id === id)
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }

    unsetTasks() {
        this.tasks = [];
    }

    addTask(task) {
        // TODO: api call
        this.tasks.push(task);
    }

    editTask(id, task) {
        // api call
        this.tasks[this.tasks.indexOf(this.tasks.find((task) => task.id === id))] = task;
    }

    removeTask(task) {
        // api call
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }

    verifyTask(task) {
        // api call
    }

    checkTask(task) {
        // api call
    }

    uncheckTask(task) {
        // api call
    }
}

export default new TaskStore();
