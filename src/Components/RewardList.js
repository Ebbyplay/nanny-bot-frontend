import React from "react";
import Reward from "./Reward";

class RewardList extends React.Component {
    render() {
        return (
            <>
                <button onClick={this.props.handleNewReward}>Neu</button>
                <Reward handleDeleteReward={this.props.handleDeleteReward} handleEditReward={this.props.handleEditReward} />
            </>
        )
    }
}

export default RewardList;