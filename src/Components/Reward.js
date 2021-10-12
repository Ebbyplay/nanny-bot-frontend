import React from "react";
import { FaTrash } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
class Reward extends React.Component {
    render() {
        return (
            <>
                <div className="mx-auto text-left card p-1">
                    <h4>{this.props.reward.name}</h4>
                    <h6>Punkte: {this.props.reward.cost}</h6>

                    <div className="row">
                        <div className="col-6 ps-4">
                            <button className="btn btn-sm btn-danger" name={this.props.reward.rewardId} onClick={this.props.handleDeleteReward}><FaTrash className="pb-1" /> Löschen</button>
                        </div>
                        <div className="col-6 text-end pe-4">
                            <button className="btn btn-sm btn-primary" name={this.props.reward.rewardId} onClick={this.props.handleEditReward}><MdEdit className="pb-1" /> Bearbeiten</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Reward;