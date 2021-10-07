import React from "react";
import Select from 'react-select'
import "./newtask.css";

class NewTask extends React.Component {

    repitions = [
        { value: 'once', label: 'Einmalig' },
        { value: 'daily', label: 'Täglich' },
        { value: 'weekly', label: 'Wöchentlich' },
        { value: 'monthly', label: 'Monthly' }
    ]

    children = [
        { value: 'children1', label: 'Kind1' },
        { value: 'children2', label: 'Kind2' },
        { value: 'children3', label: 'Kind3' }
    ]

    state = {
        title: '',
        description: '',
        selectedRepition: this.repitions[0],
        selectedChildren: [],
        points: ''
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleRepetition = event => {
        this.setState({
            selectedRepition: event.value
        });
    }

    handleChildren = event => {
        this.setState({
            selectedChildren: event
        });
    }

    saveChanges() {
        console.log("Saved");
        this.props.hideOnClick("showNew");
    }

    render() {
        return (
            <div>
                <button onClick={() => this.saveChanges()}>Speichern</button>
                <button onClick={() => this.props.hideOnClick("showNew")}>Zurück</button> <br />

                Titel:
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} /> <br />
                Beschreibung:
                <textarea name="description" value={this.state.description} onChange={this.handleChange} /> <br />

                <Select id="selectbox" defaultValue={this.state.selectedRepition} options={this.repitions} onChange={this.handleRepetition} /> <br />
                <Select id="selectbox" defaultValue={this.state.selectedChildren} isMulti options={this.children} onChange={this.handleChildren} /> <br />

                Punkte:
                <input type="text" name="points" value={this.state.points} onChange={this.handleChange} /> <br />

            </div>
        );
    }
}


export default NewTask;