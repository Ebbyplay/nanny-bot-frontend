import React from 'react';
import CurrentPoints from '../Components/CurrentPoints';
import Reward from '../Components/Reward';
import { getSessionStorage } from '../Utils/Session';

/**
 * path: /shop
 */
class Shop extends React.Component {
    state = {
        user: getSessionStorage('user'),
        points: 30 //TODO: get points from user
    }

    render() {
        const reward = {
            name: "name",
            cost: 30,
            imagePath: "imagePath",
        }
        const user_reward = {
            id: "id",
            userId: "id",
            rewardId: "id",
            claimedAt: null,
        }
        return (
            <>
                <CurrentPoints points={this.state.points} />
                <Reward reward={reward} user_reward={user_reward} />
            </>
        );
    }
}

export default Shop;