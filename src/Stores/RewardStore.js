import { makeAutoObservable, observable } from 'mobx';

import { ApiService } from '../Services';

class RewardStore {
    constructor() {
        makeAutoObservable(this);
    }

    isLoading = false;
    rewardsMap = observable.map();

    get rewards() {
        return this.rewardsMap.values();
    }

    load() {
        this.isLoading = true;

        return ApiService.getRewards()
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.rewardsMap.clear();
                this.set(res.data)
            })
            .catch((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                throw err;
            })
            .finally(() => {
                this.isLoading = false;
            })
    }

    set(rewards) {
        rewards.forEach((reward) => this.rewardsMap.set(reward.uuid, reward));
    }

    get(uuid) {
        return this.rewardsMap.get(uuid)
    }

    add(reward) {
        return ApiService.createReward(reward)
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.rewardsMap.set(res.data.uuid, res.data);
                return res.data;
            })
    }

    update(reward) {
        return ApiService.updateReward(reward)
            .then((res) => {
                if (!res || !res.data )
                    throw Error;

                this.rewardsMap.set(res.data.uuid, res.data);
                return res.data;
            })
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
