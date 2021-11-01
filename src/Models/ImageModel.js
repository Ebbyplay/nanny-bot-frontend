import { makeAutoObservable } from 'mobx';

class ImageModel {
    store;
    uuid = 0;
    name = '';
    path = '';
    isSelected = false;

    constructor(store) {
        this.store = store;
        makeAutoObservable(this);
    }

    init(data) {
        if (!data)
            return;

        if (data.uuid && data.uuid.length > 0)
            this.uuid = data.uuid;

        if (data.name && data.name.length > 0)
            this.name = data.name;

        if (data.path && data.path.length > 0)
            this.path = data.path;
    }

    toggle() {
        this.isSelected = !this.isSelected;
        this.store.set(this.uuid, this)
    }
}

export default ImageModel;