import React from 'react';
import CurrentPoints from '../Components/CurrentPoints';
import RewardList from '../Components/RewardList';
import { claimUser_Reward, getUser_Rewards } from '../Utils/CallMaster';
import { getSessionStorage } from '../Utils/Session';

/**
 * path: /shop
 */
class Shop extends React.Component {
    state = {
        user: getSessionStorage('user'),
        user_rewards: [],
    }

    componentDidMount() {
        getUser_Rewards("061e0f99-712e-4c8a-9d1f-80830f27174d")
            .then((user_rewards) => {
                this.setState({ user_rewards: user_rewards.data })
                console.log("USER_REWARDS", user_rewards)
            })
            .catch((err) => {
                console.log('could not get user_rewards ', err);
            })
    }

    buyReward = (user_rewardId) => {
        claimUser_Reward(user_rewardId)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log('could not claim user_reward ', err);
            })
    }

    render() {
        return (
            <>
                <CurrentPoints points={30} />
                <RewardList user_rewards={this.state.user_rewards} buyReward={this.buyReward} />
            </>
        );
    }
}

export default Shop;