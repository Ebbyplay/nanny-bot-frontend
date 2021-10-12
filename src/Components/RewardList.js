import React from "react";
import Reward from "./Reward";
import { CgMathPlus } from 'react-icons/cg';
import { Container } from 'react-bootstrap';

class RewardList extends React.Component {
    render() {
        return (
            <Container fluid>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-5 mx-auto">
                        <button className="btn btn-sm btn-success mb-2" onClick={this.props.handleNewReward}><CgMathPlus className="pb-1" /> Neu</button>
                        <div className="mx-auto">
                            {this.props.rewards.map((reward) => (
                                <Reward
                                    key={reward.rewardId}
                                    reward={reward}
                                    user={this.props.user}
                                    handleDeleteReward={this.props.handleDeleteReward}
                                    handleEditReward={this.props.handleEditReward}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default RewardList;