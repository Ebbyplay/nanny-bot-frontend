import React from 'react';

import CurrentPoints from '../Components/CurrentPoints';
import RewardList from '../Components/RewardList';
import { claimUser_Reward, getPoints, getUser_Rewards } from '../Utils/CallMaster';

/**
 * path: /shop
 */
class Shop extends React.Component {
    state = {
        user: null,
        user_rewards: [],
        currentPoints: 0
    }

    componentDidMount() {
        let user = this.props.user;

        if (!user) {
            return;
        }

        this.setState({
            user: user
        });

        getUser_Rewards(user.id)
            .then((res) => {
                this.setState({ user_rewards: res.data })
            })
            .catch((err) => {
                console.log('could not get user_rewards ', err);
            })

        getPoints(user.id)
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

                            this.setState({
                                currentPoints: this.state.currentPoints - cost
                            });
                        }
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