import { Component, React } from 'react';

import { Button, Form } from 'react-bootstrap';
import Select from 'react-select'

class EditTask extends Component {
    state = {
        task: this.props.task,
        repetitions: [
            { value: 'ONCE', label: 'Einmalig' },
            { value: 'DAILY', label: 'Täglich' },
            { value: 'WEEKLY', label: 'Wöchentlich' },
            { value: 'MONTHLY', label: 'Monatlich' }
        ],
        users: []
    }

    handleNameChange = (event) => {
        let task = this.state.task;
        task.name = event.target.value;

        this.setState({
            task: task
        });
    }

    handleDescriptionChange = (event) => {
        let task = this.state.task;
        task.description = event.target.value;

        this.setState({
            task: task
        });
    }

    handleWeightChange = (event) => {
        let task = this.state.task;
        task.weight = Number(event.target.value);

        this.setState({
            task: task
        });
    }

    handleUserChange = (user) => {
        // TODO
        console.log('handleUserChange', user)
    }

    handleRepetitionChange = (repetition) => {
        let task = this.state.task;
        task.repetition = repetition;

        this.setState({
            task: task
        });
    }

    render() {
        const { repetitions, task, users } = this.state;

        return (
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" value={task.name} onChange={this.handleNameChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Beschreibung</Form.Label>
                    <Form.Control name="description" type="text" as="textarea" value={task.description} onChange={this.handleDescriptionChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Punkte</Form.Label>
                    <Form.Control name="weight" type="number" value={task.weight} onChange={this.handleWeightChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Aufgabenempfänger?</Form.Label>
                    <Select isMulti value={task.users} options={users} onChange={this.handleUserChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Wiederholung?</Form.Label>
                    <Select defaultValue={repetitions[0]} options={repetitions} onChange={this.handleRepetitionChange} />
                </Form.Group>

                <Button variant="primary" onClick={() => {this.props.submit(task)}}>
                    Speichern
                </Button>

                <span>  </span>

                <Button variant="primary" onClick={this.props.back}>
                    Abbrechen
                </Button>
            </Form>
        )
    }
}

export default EditTask;
