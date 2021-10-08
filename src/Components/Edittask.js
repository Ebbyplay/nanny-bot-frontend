import React from "react";
import Select from 'react-select'
import "./Edittask.css";
import { createTask } from "../Utils/CallMaster"
import { getSessionStorage } from '../Utils/Session';

class EditTask extends React.Component {

    repitions = [
        { value: 'ONCE', label: 'Einmalig' },
        { value: 'DAILY', label: 'Täglich' },
        { value: 'WEEKLY', label: 'Wöchentlich' },
        { value: 'MONTHLY', label: 'Monatlich' }
    ]

    children = [
        { value: 'children1', label: 'Kind1' },
        { value: 'children2', label: 'Kind2' },
        { value: 'children3', label: 'Kind3' }
    ]

    state = {
        title: '',
        description: '',
        selectedRepetition: this.repitions[0],
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
            selectedRepetition: event
        });
    }

    handleChildren = event => {
        this.setState({
            selectedChildren: event
        });
    }

    saveChanges() {
        let user = getSessionStorage('user');

        createTask(user.id, this.state.title, this.state.description, this.state.selectedRepetition.value, this.state.points)
            .then(res => { this.props.onSave(res.data) });

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

                <Select id="selectbox" defaultValue={this.state.selectedRepetition} options={this.repitions} onChange={this.handleRepetition} /> <br />
                <Select id="selectbox" defaultValue={this.state.selectedChildren} isMulti options={this.children} onChange={this.handleChildren} /> <br />

                Punkte:
                <input type="text" name="points" value={this.state.points} onChange={this.handleChange} /> <br />

            </div>
        );
    }
}


export default EditTask;