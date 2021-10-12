import React from "react";
import AdminUserReward from "./AdminUserReward";
import "./Styling.css";

class AdminUserRewardList extends React.Component {

    render() {
        return (
            <div className="list">
                {
                    this.props.user_rewards.length == 0 ? (
                        <span>Diesem Kind wurden noch keine Belohnungen zugewiesen.</span>
                    ) : (
                        <>
                            {
                                this.props.user_rewards.map((user_reward) => (
                                    <AdminUserReward user_reward={user_reward} key={user_reward.id} redeem={this.props.redeem} />
                                ))
                            }
                        </>
                    )
                }
            </div>
        )
    }
}
export default AdminUserRewardList;