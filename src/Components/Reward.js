import React from "react";

class Reward extends React.Component {
    render() {
        return (
            <>
                <span>Name</span>
                <span>Punkte</span>

                <button name="id" onClick={this.props.handleDeleteReward}>Löschen</button>
                <button name="id" onClick={this.props.handleEditReward}>Bearbeiten</button>
            </>
        )
    }
}

export default Reward;