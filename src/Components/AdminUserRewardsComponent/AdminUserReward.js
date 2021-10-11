import React from "react";
import { getReward } from "../../Utils/CallMaster";
import { createDate } from "../../Utils/Time";

import "./Styling.css";

class AdminUserReward extends React.Component {
    state = {
        reward: {},
    }

    componentDidMount() {
        getReward(this.props.user_reward.rewardId)
            .then((res) => {
                this.setState({
                    reward: res.data,
                })
            })
    }

    redeem = (e) => {
        this.props.redeem(e.target.name);
    }

    render() {
        const reward = this.state.reward;
        return (
            <div className="user-reward">
                <div className="content">
                    {reward.name}<br />
                    {
                        this.props.user_reward.claimedAt != null ? (
                            <>
                                Gekauft am {createDate(this.props.user_reward.claimedAt)}<br />
                                {/* show only if user_reward is claimed */}
                                <input
                                    type="Button"
                                    value="einlösen"
                                    name={reward.id}
                                    onClick={(e) => this.redeem(e)}
                                />
                            </>
                        ) : (
                            <div>
                                Diese Belohnung wurde noch nicht gekauft.
                            </div>
                        )
                    }

                </div>
                <div>
                    {reward.imagePath}
                    <img src="/favicon.ico" alt="" />
                </div>
            </div>
        )
    }
}
export default AdminUserReward