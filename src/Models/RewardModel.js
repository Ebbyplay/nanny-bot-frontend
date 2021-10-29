import { makeAutoObservable } from 'mobx';

// TODO
class RewardModel {
    store;
    description;
    imagePath;
    name;
    uuid;

    constructor(store) {
        this.store = store;
        makeAutoObservable(this);
    }

    init(data) {

    }

    save() {
        this.store.update(this);
    }

    destroy() {
        this.store.delete(this.uuid);
    }
}

export default RewardModel;