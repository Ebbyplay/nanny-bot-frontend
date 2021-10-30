import { Component, React } from 'react';
import { Button, Form } from 'react-bootstrap';

class EditTask extends Component {
    state = {
        task: this.props.task
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

    render() {
        const { task } = this.state;

        // TODO - Kinder Select und Repetition Select einbauen
        return (
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" value={task.name} onChange={this.handleNameChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Beschreibung</Form.Label>
                    <Form.Control name="description" type="text" value={task.description} onChange={this.handleDescriptionChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Punkte</Form.Label>
                    <Form.Control name="weight" type="number" value={task.weight} onChange={this.handleWeightChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Button variant="primary" onClick={() => {this.props.submit(task)}}>
                        Speichern
                    </Button>
                    <Button variant="primary" onClick={this.props.back}>
                        Abbrechen
                    </Button>
                </Form.Group>
            </Form>
        )
    }
}

export default EditTask;
