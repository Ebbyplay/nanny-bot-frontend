import React from "react";

import { getRewards, createReward, deleteReward, updateReward } from "../Utils/CallMaster";
import RewardListAdmin from "../Components/RewardComponents/RewardListAdmin";
import NewReward from "../Components/RewardComponents/NewReward";

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

    createReward = (title, cost) => {
        console.log('create reward');

        // error handling
        if (!title || !cost)
            return alert('bitte fuellen sie alle felder aus!');

        createReward(this.props.user.id, title, cost)
        .then((res) => {
            this.handleBackButton();

            let newReward = res.data;

            if (!newReward)
                return;

            this.setState({
                rewards: this.state.rewards.concat(newReward)
            });
        })

    }

    switchView = () => {
        if (this.state.view === "list") {
            return <RewardListAdmin handleDeleteReward={this.handleDeleteReward} handleEditReward={this.handleEditReward} handleNewReward={this.handleNewReward} rewards={this.state.rewards} />
        } else if (this.state.view === "edit") {
            return <NewReward create={this.createReward} handleBackButton={this.handleBackButton} />
        }
    }

    render() {
        return (this.switchView());
    }
}

export default Admin_rewards;