import React from 'react';
import CurrentPoints from '../Components/CurrentPoints';
import RewardList from '../Components/RewardList';
import { claimUser_Reward, getPoints, getUser_Rewards } from '../Utils/CallMaster';
import { getSessionStorage } from '../Utils/Session';

/**
 * path: /shop
 */
class Shop extends React.Component {
    state = {
        user: getSessionStorage('user'),
        user_rewards: [],
        currentPoints: 0
    }

    componentDidMount() {
        //TODO: set to user.id
        const subAccountId = "cbdbd0f2-6720-46a1-9dd3-ed741d9d28f9";
        getUser_Rewards(subAccountId)
            .then((res) => {
                this.setState({ user_rewards: res.data })
            })
            .catch((err) => {
                console.log('could not get user_rewards ', err);
            })

        getPoints(subAccountId)
            .then((res) => {
                this.setState({ currentPoints: res.data })
            })
            .catch((err) => {
                console.log('could not get points ', err);
            })
    }

    buyReward = (user_rewardId, cost) => {
        claimUser_Reward(user_rewardId)
            .then((res) => {
                this.setState({
                    user_rewards: this.state.user_rewards.map(user_reward => {
                        if (user_reward.id === res.data.id) {
                            user_reward = res.data;
                            this.state.currentPoints -= cost
                        }
                        console.log("UPDATED REWARD", user_reward)
                        return user_reward
                    }),

                })
            })
            .catch((err) => {
                console.log('could not claim user_reward ', err);
            })
    }

    render() {
        return (
            <>
                <CurrentPoints points={this.state.currentPoints} />
                <RewardList user_rewards={this.state.user_rewards} buyReward={this.buyReward} points={this.state.currentPoints} />
            </>
        );
    }
}

export default Shop;