import "./EditCreateTask.css";

import React from "react";
import Select from 'react-select'

import { createTask, updateTask, getTask } from "../../Utils/CallMaster"
import { getSessionStorage } from '../../Utils/Session';

class EditCreateTask extends React.Component {

    repitions = [
        { value: 'ONCE', label: 'Einmalig' },
        { value: 'DAILY', label: 'Täglich' },
        { value: 'WEEKLY', label: 'Wöchentlich' },
        { value: 'MONTHLY', label: 'Monatlich' }
    ]

    children = []

    state = {
        title: '',
        description: '',
        selectedRepetition: this.repitions[0],
        selectedChildren: [],
        points: ''
    };

    componentDidMount() {
        this.setChildren();

        if (this.props.editTask) {

            getTask(this.props.taskid)
                .then((res) => {
                    const resultRepetition = this.getRepetition(res.data.repetition);

                    this.setState({
                        title: res.data.name,
                        description: res.data.description,
                        selectedRepetition: resultRepetition,
                        points: res.data.weight
                    })
                })
        }
    }

    getRepetition = (rep) => {
        let ret = {};

        this.repitions.forEach(element => {
            if (element.value === rep) {
                ret = element;
            }
        });

        return ret;
    }

    setChildren = () => {
        let i = 0;

        this.props.children.forEach(element => {

            this.children[i] = { value: element.id, label: element.name };

            i++;
        })
    }

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

        if (this.props.editTask) {
            console.log(this.state);

            updateTask(this.props.taskid, this.state.title, this.state.description, this.state.selectedRepetition.value, this.state.points)
                .then(res => { this.props.taskchanged(res.data) });
        }
        else {
            createTask(user.id, this.state.title, this.state.description, this.state.selectedRepetition.value, this.state.points)
                .then(res => { this.props.taskadd(res.data) });
        }

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

                <Select id="selectbox" value={this.state.selectedRepetition} options={this.repitions} onChange={this.handleRepetition} /> <br />
                <Select id="selectbox" defaultValue={this.state.selectedChildren} isMulti options={this.children} onChange={this.handleChildren} /> <br />

                Punkte:
                <input type="text" name="points" value={this.state.points} onChange={this.handleChange} /> <br />

            </div>
        );
    }
}


export default EditCreateTask;