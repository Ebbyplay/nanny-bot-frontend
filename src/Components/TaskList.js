import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Container } from 'react-bootstrap';

import Task from './Task';

class TaskList extends React.Component {
    render() {
        return (
            <Container>
                <span>Aufgaben:</span>

                {this.props.tasks.map((task) => (
                    <Task
                        key={task.uuid}
                        task={task}
                        user={this.props.user}
                        onEdit={this.props.editTask}
                    />
                ))}
            </Container>
        )
    }
}

export default TaskList;