import { makeAutoObservable } from 'mobx';

// TODO
class UserModel {
    store;
    uuid = 0;
    name = '';
    email = '';
    imagePath = '';
    role = '';

    constructor(store) {
        this.store = store;
        makeAutoObservable(this);
    }

    init(data) {
        if (!data)
            return;

        if (data.uuid && data.uuid.length > 0)
            this.uuid = data.uuid;

        if (data.id && data.id.length > 0)
            this.uuid = data.id;

        if (data.name && data.name.length > 0)
            this.name = data.name;

        if (data.email && data.email.length > 0)
            this.email = data.email;

        if (data.imagePath && data.imagePath.length > 0)
            this.imagePath = data.imagePath;

        if (data.role && data.role.length > 0)
            this.role = data.role;
    }

    setName(name) {
        this.name = name;
    }

    setEmail(email) {
        this.email = email;
    }

    setImagePath(path) {
        this.imagePath = path;
    }

    changeRole(role) {
        this.role = role;
    }

    save() {
        if (this.uuid === 0)
            return this.store.add(this);

        this.store.update(this);
    }

    destroy() {
        this.store.delete(this.uuid);
    }
}

export default UserModel;