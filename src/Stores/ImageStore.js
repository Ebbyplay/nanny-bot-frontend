import { makeAutoObservable, observable } from 'mobx';


import { ApiService } from '../Services';
import ImageModel from '../Models/ImageModel';

class ImageStore {
    constructor() {
        makeAutoObservable(this);
    }

    errors = null;
    isLoading = false;

    imageMap = observable.map();

    load() {
        this.setErrors(null);
        this.setIsLoading(true);

        return ApiService.getImages()
            .then((res) => {
                if (!res || !res.data ) {
                    let error = new Error('imageStore load: some error message');
                    this.setErrors(error);
                    throw error;
                }

                this.imageMap.clear();
                res.data.forEach((image) => this.set(image));
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

    set(image) {
        let imageModel = new ImageModel(this);
        imageModel.init(image);

        this.imageMap.set(imageModel.uuid, imageModel);
    }

    get(uuid) {
        return this.imageMap.get(uuid)
    }

    clear() {
        this.imageMap.clear();
    }

    setIsLoading(isLoading) {
        this.isLoading = isLoading;
    }

    setErrors(errors) {
        this.errors = errors;
    }
}

export default new ImageStore();
