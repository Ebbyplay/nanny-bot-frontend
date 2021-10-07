import React from 'react';
import { getSessionStorage } from '../Utils/Session';
import Task from './Task'

class TaskList extends React.Component {
    state = {
        isMain: getSessionStorage('user').id
    }

    render() {
        return (
            <ul>
                <strong>TaskList:</strong>

                {this.props.tasks.map(task => (
                    <Task 
                        key={task.id}
                        task={task} />
                ))}
            </ul>
        )
    }
}

export default TaskList;