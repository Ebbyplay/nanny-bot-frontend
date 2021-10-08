import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Container } from 'react-bootstrap';

import Task from './Task';

class TaskList extends React.Component {
    render() {

        let tasks = this.props.tasks;

        return (
            <Container>
                <span>Aufgaben:</span>

                {tasks.map((task) => (
                    <Task
                        key={task.uuid}
                        task={task}
                        user={this.props.user}
                        onEdit={this.props.showEditCreate}
                    />
                ))}
            </Container>
        )
    }
}

export default TaskList;