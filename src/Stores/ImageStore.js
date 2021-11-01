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

    get images() {
        return this.imageMap.toJSON();
    }

    // hardcoded notloesung
    init() {
        const imageData = [
            {uuid: '369a32c2-3af3-11ec-8d3d-0242ac130003', name: 'beach_ball.png', path: '/images/'},
            {uuid: '414aa562-3af3-11ec-8d3d-0242ac130003', name: 'bear.png', path: '/images/'},
            {uuid: '438aaa84-3af3-11ec-8d3d-0242ac130003', name: 'bike.png', path: '/images/'},
            {uuid: '466ae8c2-3af3-11ec-8d3d-0242ac130003', name: 'butterfly.png', path: '/images/'},
            {uuid: '4805eb14-3af3-11ec-8d3d-0242ac130003', name: 'cake.png', path: '/images/'},
            {uuid: '49878ca4-3af3-11ec-8d3d-0242ac130003', name: 'car.png', path: '/images/'},
            {uuid: '4ae0f266-3af3-11ec-8d3d-0242ac130003', name: 'cat.png', path: '/images/'},
            {uuid: '4c835fbe-3af3-11ec-8d3d-0242ac130003', name: 'crab.png', path: '/images/'},
            {uuid: '4e785a7c-3af3-11ec-8d3d-0242ac130003', name: 'dino.png', path: '/images/'},
            {uuid: '4fc7f4f0-3af3-11ec-8d3d-0242ac130003', name: 'dog.png', path: '/images/'},
            {uuid: '514e3ff0-3af3-11ec-8d3d-0242ac130003', name: 'dolphin.png', path: '/images/'},
            {uuid: '536c54f2-3af3-11ec-8d3d-0242ac130003', name: 'duck.png', path: '/images/'},
            {uuid: '5543b144-3af3-11ec-8d3d-0242ac130003', name: 'elephant.png', path: '/images/'},
            {uuid: '5f03de27-ec96-4a72-9b33-7860942d9a23', name: 'flower.png', path: '/images/'},
            {uuid: '0461ad4d-8ba6-4946-bb2a-76a4d551eb18', name: 'giraffe.png', path: '/images/'},
            {uuid: 'da0fb0b6-8ec7-4ca4-ba3b-6f0074fc63fe', name: 'ice.png', path: '/images/'},
            {uuid: '2f75fc5e-8821-4cb3-9fa8-79581bbd6a5e', name: 'owl.png', path: '/images/'},
            {uuid: 'a70716d9-6905-4cde-8885-4e17d96c2fae', name: 'pig.png', path: '/images/'},
            {uuid: '241fa6dc-a487-492e-af1b-09e324b2ef7e', name: 'pineapple.png', path: '/images/'},
            {uuid: '6badffbc-7157-413b-8864-cdf14925e07b', name: 'plane.png', path: '/images/'},
            {uuid: '60e79b70-1cc2-4111-8130-57c397f503af', name: 'rainbow.png', path: '/images/'},
            {uuid: 'bbe66aaf-bc4d-4ff5-9094-21e168b89673', name: 'rocket.png', path: '/images/'},
            {uuid: 'ce7704c6-b9e9-4371-a2d3-74e82a1d4018', name: 'seahorse.png', path: '/images/'},
            {uuid: '32c76fd5-bdbc-44ce-96a5-7370d632f3c4', name: 'strawberry.png', path: '/images/'},
            {uuid: '410e2034-087e-4ec6-a60c-b32b99ca3e08', name: 'sun.png', path: '/images/'},
            {uuid: 'c61ddbe8-dcad-4d43-b1b7-09035a7e7bad', name: 'tiger.png', path: '/images/'},
            {uuid: '1666be6c-500e-4764-a374-e9fd710faa59', name: 'tomato.png', path: '/images/'},
            {uuid: 'f611f473-361b-46c3-81e5-8d5a059ec744', name: 'unicorn.png', path: '/images/'},
            {uuid: '4998d342-6944-4547-be61-81df70b18e89', name: 'walrus.png', path: '/images/'},
            {uuid: 'aaf5625f-a073-4e1f-b2c3-fb82cbfc9c2d', name: 'watermelon.png', path: '/images/'}
        ];

        for (let image of imageData)
            this.set(image);
    }

    // was fuer spaeter - wenn bilder vom backend kommen - falls ueberhaupt
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
        return this.imageMap.get(uuid);
    }

    unsetAll() {
        this.imageMap.forEach((image) => {
            if (image.isSelected)
                image.toggle();

            this.set(image);
        })
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
