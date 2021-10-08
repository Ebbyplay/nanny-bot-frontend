import React from "react";
import { Container } from "react-bootstrap";
import Reward from "./Reward";

class RewardList extends React.Component {

    render() {
        return (
            <Container>
                {
                    this.props.user_rewards.map((user_reward) => (
                        < Reward
                            user_reward={user_reward}
                            buyReward={this.props.buyReward}
                            key={user_reward.id}
                        />
                    ))
                }
            </ Container>
        )
    }
}

export default RewardList;