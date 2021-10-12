import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';

import Task from './Task';

class TaskList extends React.Component {
    render() {
        return (
            <Container>
                <OverlayTrigger placement="top" overlay={<Tooltip>Tasks können durch einen klick auf und zu geklappt werden.</Tooltip>}>
                    <FaInfoCircle />
                </OverlayTrigger>

                <span> Aufgaben:</span>

                {this.props.tasks.map((task) => (
                    <Task
                        key={task.uuid}
                        task={task}
                        user={this.props.user}
                        edit={this.props.edit}
                        delete={this.props.delete}
                    />
                ))}
            </Container>
        )
    }
}

export default TaskList;