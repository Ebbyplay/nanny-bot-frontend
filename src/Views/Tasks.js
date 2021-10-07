import React from 'react';
import { getSessionStorage } from '../Utils/Session';
import TaskList from '../Components/TaskList'
import { getTasks } from '../Utils/CallMaster';

/**
 * path: /shop
 */
class Tasks extends React.Component {
    state = {
        user: getSessionStorage('user'),
        tasks: [{id: 1, name: 'task1', weight: 10, description: 'description123'}, {id: 2, name: 'task2', weight: 10, description: 'description123'}]
    }

    componentDidMount() {
        getTasks(this.state.user.id)
        .then((tasks) => {
            this.setState({tasks: tasks});
        })
        .catch((err) => {
            // error handling?
        })
    }

    render() {
        return (
            <>
                <p>todo: tasks view</p>
                <TaskList user={this.state.user} tasks={this.state.tasks} />
            </>
        );
    }
}

export default Tasks;