import { makeAutoObservable, observable } from 'mobx';

import { ApiService } from '../Services';
import RewardModel from '../Models/RewardModel';

class RewardStore {
    constructor() {
        makeAutoObservable(this);
    }

    isLoading = false;
    errors = null;

    rewardsMap = observable.map();

    get rewards() {
        return this.rewardsMap.toJSON();
    }

    load() {
        this.setErrors(null);
        this.setIsLoading(true);

        return ApiService.getRewards()
            .then((res) => {
                if (!res || !res.data ) {
                    let error = new Error('rewardStore load: some error message');
                    this.setErrors(error);
                    throw error;
                }

                this.rewardsMap.clear();
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

    set(reward) {
        let rewardModel = new RewardModel(this);
        rewardModel.init(reward);

        this.rewardsMap.set(rewardModel.uuid, rewardModel);
    }

    get(uuid) {
        return this.rewardsMap.get(uuid)
    }

    add(reward) {
        this.setErrors(null);
        this.setIsLoading(true);

        return ApiService.createReward(reward)
            .then((res) => {
                if (!res || !res.data ) {
                    let error = new Error('rewardStore add: some error message');
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
                this.setIsLoading(false);
            })
    }

    update(reward) {
        this.setErrors(null);
        this.isLoading(true);

        return ApiService.updateReward(reward)
            .then((res) => {
                if (!res || !res.data) {
                    let error = new Error('rewardStore update: some error message');
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
        this.setIsLoading(true);

        return ApiService.deleteReward(uuid)
            .then((res) => {
                if (!res || !res.data) {
                    let error = new Error('rewardStore delete: some error message');
                    this.setErrors(error);
                    throw error;
                }

                this.rewardsMap.delete(uuid);
            })
            .catch(((err) => {
                this.loadTasks();
                throw err;
            }))
            .finally(() => {
                this.setErrors(null);
                this.setIsLoading(false);
            });
    }

    clear() {
        this.rewardsMap.clear();
    }

    setIsLoading(isLoading) {
        this.isLoading = isLoading;
    }

    setErrors(errors) {
        this.errors = errors;
    }
}

export default new RewardStore();
