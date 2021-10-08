import React from "react";
import ImageSelector from "./ImageSelector";

class NewReward extends React.Component {
    render() {
        return (
            <>
                <button onClick={this.props.handleBackButton}>Zurück</button>
                <button name="id" onClick={this.props.handleSaveReward}>Speichern</button>
                <label for="title">Titel</label>
                <input type="text" name="title" onChange={this.props.onChange} value={this.props.state.title} />
                <label for="points">Punkte</label>
                <input type="number" name="points" min="0" onChange={this.props.onChange} value={this.props.state.points} />
                <ImageSelector />
            </>
        )
    }
}

export default NewReward;