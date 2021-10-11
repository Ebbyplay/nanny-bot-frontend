import React from 'react';

import UserTaskList from '../Components/User_TaskComponents/UserTaskList';
import { getUser_Tasks, completeUser_Task } from '../Utils/CallMaster';

/**
 * path: /user_tasks
 */
class UserTasks extends React.Component {
    state = {
        user_tasks: [],
    }

    componentDidMount() {
        getUser_Tasks(this.props.user.id)
            .then((res) => {
                this.setState({
                    user_tasks: res.data
                });
            })
            .catch((err) => {
                console.log("Could not get user_tasks ", err);
            })
    }

    completeTask = (id) => {
        completeUser_Task(id)
            .then((res) => {
                this.setState(
                    this.state.user_tasks.map((user_task) => {
                        if (user_task.id === id) {
                            user_task.completetAt = res.data.completetAt;
                        }
                        return user_task;
                    })
                )
            })
            .catch((err) => {

            })
    }


    render() {
        return (
            <>
                <UserTaskList user_tasks={this.state.user_tasks} completeTask={this.completeTask} />
            </>
        );
    }
}

export default UserTasks;