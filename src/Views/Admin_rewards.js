import React from "react";

import { getRewards, createReward, deleteReward, updateReward } from "../Utils/CallMaster";
import RewardListAdmin from "../Components/RewardComponents/RewardListAdmin";
import NewReward from "../Components/RewardComponents/NewReward";

class Admin_rewards extends React.Component {
    state = {
        view: "list",
        rewards: [],
        currentReward: [
            {
                points: 0,
                imagePath: "",
                rewardId: "",
                title: "",
                cost: 0,
            }
        ]
    }

    componentDidMount() {
        getRewards(this.props.user.id)
            .then((res) => {
                this.setState({ rewards: res.data });
            })
            .catch((err) => {
                console.log("Could not get rewards ", err);
            })
    }

    handleChange = (e) => {
        console.log(e.target)
        this.setState({ currentReward: { title: e.target.title, cost: e.target.cost } });
    }

    handleDeleteReward = (e) => {
        deleteReward(e.target.name);
    }

    handleNewReward = (e) => {
        this.setState({ view: "edit", currentReward: {} });
    }

    handleEditReward = (e) => {
        let currentReward = this.state.rewards.filter((reward) => { return reward.rewardId === e.target.name })[0];

        this.setState({
            view: "edit",
            currentReward: {
                rewardId: currentReward.rewardId,
                title: currentReward.name,
                cost: currentReward.cost,
                imagePath: currentReward.imagePath
            }
        });
    }

    handleSaveReward = (e) => {
        if (this.state.rewardId.length) {
            updateReward(this.state.rewardId, this.state.title, this.state.cost);
        } else {
            createReward(this.props.user.id, this.state.title, this.state.cost);
        }

        this.resetView();
    }

    resetView = () => {
        this.setState({ view: "list", currentReward: {} });
    }

    switchView = () => {
        if (this.state.view === "list") {
            return <RewardListAdmin handleDeleteReward={this.handleDeleteReward} handleEditReward={this.handleEditReward} handleNewReward={this.handleNewReward} rewards={this.state.rewards} />
        } else if (this.state.view === "edit") {
            return <NewReward handleSaveReward={this.handleSaveReward} handleBackButton={this.resetView} onChange={this.handleChange} currentReward={this.state.currentReward} />
        }
    }

    render() {
        return (
            <div className="mt-3">
                {this.switchView()}
            </div>
        )
    }
}

export default Admin_rewards;