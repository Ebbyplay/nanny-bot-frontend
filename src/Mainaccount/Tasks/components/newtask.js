import React from "react";
import "./newtask.css";

class NewTask extends React.Component {

    state = {
        value: '',
        descritpion: ''
    };

    handleChange = event => {
        this.setState({
            value: event.target.value
        })
    }

    handleTextAreaChange = event => {
        this.setState({
            descritpion: event.target.value
        })
    }

    saveChanges() {
        console.log("Saved");
        this.props.hideOnClick("showNew")
    }

    render() {
        return (
            <div>
                <button onClick={() => this.saveChanges()}>Speichern</button>
                <button onClick={() => this.props.hideOnClick("showNew")}>Zurück</button> <br />

                Bezeichnung:
                <input type="text" value={this.state.value} onChange={this.handleChange} /> <br />
                Beschreibung:
                <textarea value={this.state.descritpion} onChange={this.handleTextAreaChange} /> <br />

            </div>
        );
    }
}


export default NewTask;