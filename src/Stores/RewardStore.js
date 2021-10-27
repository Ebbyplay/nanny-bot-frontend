import { makeAutoObservable, observable } from 'mobx';

import { ApiService } from '../Services';

class RewardStore {
    constructor() {
        makeAutoObservable(this);
    }

    isLoading = false;
    rewards = observable.map();

    loadRewards() {
        this.isLoading = true;

        return ApiService.getRewards()
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.rewards.clear();
                res.data.forEach(reward => this.rewards.set(reward.uuid, reward));
            })
            .catch((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                throw err;
            })
            .finally(() => {
                this.isLoading = false;
            })
    }

    getReward(uuid) {
        return this.rewards.get(uuid)
    }

    addReward(reward) {
        return ApiService.createReward(reward)
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.rewards.set(res.data.uuid, res.data);
                return res.data;
            })
    }

    updateReward(reward) {
        return ApiService.updateReward(reward)
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.rewards.set(res.data.uuid, res.data);
                return res.data;
            })
    }

    deleteReward(uuid) {
        return ApiService.deleteReward(uuid)
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.rewards.delete(uuid);
            })
            .catch(((err) => {
                this.loadTasks();
                throw err;
            }));
    }

    clear() {
        this.rewards.clear();
    }
}

export default new RewardStore();
