import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Container } from 'react-bootstrap';

import { getTasks } from '../Utils/CallMaster';
import Task from './Task'

class TaskList extends React.Component {
    state = {
        tasks: [{uuid: 1, name: 'task1', weight: 10, description: 'description123'}, {uuid: 2, name: 'task2', weight: 10, description: 'description123'}]
    }

    componentDidMount() {
        getTasks(this.props.user.id)
        .then((res) => {
            console.log('response getTasks', res)
            this.setState({tasks: res.data});
        })
    }
    

    render() {
        return (
            <Container>
                <span>Aufgaben:</span>

                {this.state.tasks.map((task) => (
                    <Task 
                        key={task.uuid}
                        task={task}
                        user={this.props.user}
                    />
                ))}
            </Container>
        )
    }
}

export default TaskList;