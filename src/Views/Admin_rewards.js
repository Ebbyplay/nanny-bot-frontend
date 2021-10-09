import React from "react";

import { getRewards, createReward, deleteReward, updateReward } from "../Utils/CallMaster";
import RewardList from "../Components/RewardList";
import NewReward from "../Components/NewReward";

class Admin_rewards extends React.Component {
    state = {
        view: "list",
        rewards: [],
        points: 0,
        image: "",
        rewardId: "",
        title: "",
        cost: 0,
    }

    componentDidMount() {
        this.fetchRewardsAndUpadteState();
    }

    fetchRewardsAndUpadteState() {
        getRewards(this.props.user.id)
            .then((res) => {
                this.setState({ rewards: res.data });
            });
    }

    /**
     * is triggered when typing in input fields
     * @param {*} e 
     */
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleDeleteReward = (e) => {
        console.log(e.target.name)
        deleteReward(e.target.name);
    }

    handleNewReward = (e) => {
        this.setState({ view: "edit", rewardId: "", title: "", cost: 0 });
    }

    handleEditReward = (e) => {
        let currentReward = this.state.rewards.filter(reward => { return reward.rewardId === e.target.name })[0];

        this.setState({
            view: "edit",
            rewardId: currentReward.rewardId,
            title: currentReward.name,
            cost: currentReward.cost
        });
    }

    handleSaveReward = (e) => {
        if (this.state.rewardId.length) {
            updateReward(this.state.rewardId, this.state.title, this.state.cost);
        } else {
            createReward(this.props.user.id, this.state.title, this.state.cost);
        }

        this.setState({ view: "list", rewardId: "", title: "", cost: 0 }, () => {
            this.fetchRewardsAndUpadteState();
        })
    }

    handleBackButton = (e) => {
        this.setState({ view: "list", rewardId: "", title: "", cost: 0 });
    }

    switchView = () => {
        if (this.state.view === "list") {
            return <RewardList handleDeleteReward={this.handleDeleteReward} handleEditReward={this.handleEditReward} handleNewReward={this.handleNewReward} rewards={this.state.rewards} />
        } else if (this.state.view === "edit") {
            return <NewReward handleSaveReward={this.handleSaveReward} handleBackButton={this.handleBackButton} onChange={this.onChange} state={this.state} />
        }
    }

    render() {
        return (this.switchView());
    }
}

export default Admin_rewards;