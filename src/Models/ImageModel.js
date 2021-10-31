import { makeAutoObservable } from 'mobx';

class ImageModel {
    store;
    uuid = 0;
    name = '';
    path = '';

    constructor(store) {
        this.store = store;
        makeAutoObservable(this);
    }

    init(data) {
        if (!data)
            return;

        // TODO: generate uuid
    }
}

export default ImageModel;