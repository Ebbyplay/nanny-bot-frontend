import React from "react";
import AdminUserRewardList from "../Components/AdminUserRewardsComponents/AdminUserRewardList";
import SubAccDataSelector from "../Components/UtilComponents/SubAccDataSelector";

class AdminUserRewards extends React.Component {
    state = {
        user_rewards: [],
        dataType: "user_rewards"
    }

    getData = (data) => {
        console.log("USER_REWARDS ", data);
        this.setState({
            user_rewards: data,
        })
    }

    redeem = (e) => {
        //TODO: redeem is not yet implemented in backend & database     
    }

    render() {

        return (
            <>
                <SubAccDataSelector
                    user={this.props.user}
                    getData={this.getData}
                    dataType={this.state.dataType}
                />
                <AdminUserRewardList
                    user_rewards={this.state.user_rewards}
                    redeem={this.redeem}
                />
            </>
        )
    }
}
export default AdminUserRewards;