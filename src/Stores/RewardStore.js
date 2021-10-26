import { makeAutoObservable } from 'mobx';

// import { ApiService } from '../Services';

class RewardStore {
    constructor() {
        makeAutoObservable(this);
    }

    rewards = [];

    getReward(id) {
        return this.rewards.find((reward) => reward.id === id)
    }

    setRewards(rewards) {
        this.rewards = rewards;
    }

    unsetRewards() {
        this.rewards = [];
    }

    addRewards(reward) {
        // TODO: api call
        this.rewards.push(reward);
    }

    editRewards(id, reward) {
        // api call
        this.rewards[this.rewards.indexOf(this.rewards.find((reward) => reward.id === id))] = reward;
    }

    removeRewards(reward) {
        // api call
        this.rewards.splice(this.rewards.indexOf(reward), 1);
    }
}

export default new RewardStore();
