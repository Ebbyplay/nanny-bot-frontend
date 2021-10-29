import { makeAutoObservable } from 'mobx';

class TaskModel {
    store;
    uuid = 0;
    name = '';
    description = '';
    imagePath = '';
    repetition = '';
    weight = '';

    constructor(store) {
        this.store = store;
        makeAutoObservable(this);
    }

    init(data) {
        if (!data)
            return;

        if (data.description && data.description.lenth > 0)
            this.description = data.description;

        if (data.imagePath && data.imagePath.length > 0)
            this.imagePath = data.imagePath;

        if (data.name && data.name.length > 0)
            this.name = data.name;

        if (data.repetition && data.repetition.length > 0)
            this.repetition = data.repetition;

        if (data.uuid && data.uuid.length > 0)
            this.uuid = data.uuid;

        if (data.weight && data.weight.length > 0)
            this.weight = data.weight;
    }

    setDescription(description) {
        this.description = description;
        console.log('setDescription', this.name, description)
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    save() {
        this.store.update(this);
        console.log('save')
    }

    destroy() {
        this.store.delete(this.uuid);
    }

}

export default TaskModel;