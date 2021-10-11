import React from "react";
import RewardAdmin from "./RewardAdmin";
import { CgMathPlus } from 'react-icons/cg';

class RewardListAdmin extends React.Component {
    render() {
        return (
            <>
                <button className="btn btn-sm btn-success ms-3 mb-2" onClick={this.props.handleNewReward}><CgMathPlus className="pb-1" /> Neu</button>

                {this.props.rewards.map((reward) => (
                    <RewardAdmin
                        key={reward.rewardId}
                        reward={reward}
                        user={this.props.user}
                        handleDeleteReward={this.props.handleDeleteReward}
                        handleEditReward={this.props.handleEditReward}
                    />
                ))}
            </>
        )
    }
}

export default RewardListAdmin;