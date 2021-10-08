import React from "react";
import { getRewards } from "./Utils/CallMaster";
import RewardList from "./Components/RewardList";
import NewReward from "./Components/NewReward";

class Admin_rewards extends React.Component {
    state = {
        view: "list",
        rewards: getRewards(),
        title: "test",
        points: 0,
        image: ""
    }

    /**
     * is triggered when typing in input fields
     * @param {*} e 
     */
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleDeleteReward = (e) => {
        console.log("delete this id: " + e.target.name)
    }

    handleNewReward = (e) => {
        console.log("change view to edit " + this.state.user.id);
        this.setState({ view: "edit" })
    }

    handleEditReward = (e) => {
        console.log("edit this id: " + e.target.name)
        this.setState({ view: "edit" })
    }

    handleSaveReward = (e) => {
        console.log("save this id: " + e.target.name)
        this.setState({ view: "list" })
    }

    handleBackButton = (e) => {
        console.log("back")
        this.setState({ view: "list" })
    }

    switchView = () => {
        if (this.state.view === "list") {
            return <RewardList handleDeleteReward={this.handleDeleteReward} handleEditReward={this.handleEditReward} handleNewReward={this.handleNewReward} />
        } else if (this.state.view === "edit") {
            return <NewReward handleSaveReward={this.handleSaveReward} handleBackButton={this.handleBackButton} onChange={this.onChange} state={this.state} />
        }
    }

    render() {
        return (this.switchView())
    }
}

export default Admin_rewards;