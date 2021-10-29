import { makeAutoObservable, observable } from 'mobx';

import { ApiService } from '../Services';
import RewardModel from '../Models/RewardModel';

class RewardStore {
    constructor() {
        makeAutoObservable(this);
    }

    isLoading = false;
    rewardsMap = observable.map();

    get rewards() {
        return this.rewardsMap.toJSON();
    }

    load() {
        this.isLoading = true;

        return ApiService.getRewards()
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.rewardsMap.clear();
                res.data.forEach((reward) => this.set(reward));
            })
            .catch((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                throw err;
            })
            .finally(() => {
                this.isLoading = false;
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
        return ApiService.createReward(reward)
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.set(res.data.uuid, res.data);
                return this.get(res.data.uuid);
            })
    }

    async update(reward) {
        const res = await ApiService.updateReward(reward);

        if (!res || !res.data)
            throw Error;

        this.set(res.data);
        return this.get(res.data.uuid);
    }

    delete(uuid) {
        return ApiService.deleteReward(uuid)
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.rewardsMap.delete(uuid);
            })
            .catch(((err) => {
                this.loadTasks();
                throw err;
            }));
    }

    clear() {
        this.rewardsMap.clear();
    }
}

export default new RewardStore();
