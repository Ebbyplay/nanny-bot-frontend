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
                rewardId: "",
                points: 0,
                imagePath: "",
                title: "",
                cost: 0
            }
        ]
    }

    componentDidMount() {
        getRewards(this.props.user.id)
            .then((res) => {
                this.setState({ rewards: res.data, currentReward: {} });
            })
            .catch((err) => {
                console.log("Could not get rewards ", err);
            })
    }

    handleNewReward = (e) => {
        this.setState({
            view: "edit",
            currentReward: {
                rewardId: "",
                points: 0,
                imagePath: "",
                title: "",
                cost: 0
            }
        });
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

    resetView = () => {
        this.setState({
            view: "list",
            currentReward: {
                rewardId: "",
                points: 0,
                imagePath: "",
                title: "",
                cost: 0
            }
        });
    }

    handleChange = (e) => {
        this.setState({
            currentReward: {
                ...this.state.currentReward,
                [e.target.name]: e.target.value
            }
        })
    }

    handleDeleteReward = (e) => {
        console.log(e.target)
        //deleteReward(e.target.name);
    }

    handleSaveReward = () => {
        if (this.state.currentReward.rewardId !== "") {
            updateReward(this.state.currentReward.rewardId, this.state.currentReward.title, this.state.currentReward.cost);

            this.setState(prevState => {
                return {
                    rewards: prevState.rewards.map(reward => {
                        if (reward.rewardId === this.state.currentReward.rewardId) {
                            return {
                                ...reward,
                                title: this.state.currentReward.title,
                                cost: this.state.currentReward.cost
                            }
                        }
                    })
                }
            })
        } else {
            createReward(this.props.user.id, this.state.currentReward.title, this.state.currentReward.cost);

            let newRewards = this.state.rewards;
            newRewards.push(this.state.currentReward);

            this.setState({ rewards: newRewards });
        }

        this.resetView();
    }

    switchView = () => {
        if (this.state.view === "list") {
            return <RewardListAdmin
                handleDeleteReward={this.handleDeleteReward}
                handleEditReward={this.handleEditReward}
                handleNewReward={this.handleNewReward}
                rewards={this.state.rewards}
            />
        } else if (this.state.view === "edit") {
            return <NewReward
                rewards={this.state.rewards}
                handleSaveReward={this.handleSaveReward}
                handleBackButton={this.resetView}
                handleChange={this.handleChange}
                currentReward={this.state.currentReward}
            />
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