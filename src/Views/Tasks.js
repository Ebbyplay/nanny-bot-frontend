import React from 'react';
import { getSessionStorage } from '../Utils/Session';
import TaskList from '../Components/TaskList'
import { getAllSubAccounts, getTasks } from '../Utils/CallMaster';

import EditTask from '../Components/EditCreateTask';

/**
 * path: /shop
 */
class Tasks extends React.Component {
    state = {
        user: getSessionStorage('user'),
        subAccounts: [],
        tasks: [],
        showEditCreate: false,
        edit: false,
        taskid: ''
    }

    componentDidMount() {
        if (!this.state.user.email)
            return;

        getAllSubAccounts(this.state.user.id)
            .then((subAccounts) => {
                this.setState({ subAccounts: subAccounts });
            })
            .catch((err) => {
                console.log('could not get all sub accounts', err);
            })

        getTasks(this.state.user.id)
            .then((res) => {
                console.log('response getTasks', res)
                this.setState({ tasks: res.data });
            })
    }

    getTask = (task) => {
        let ret = {};

        this.state.tasks.forEach(element => {
            if (element.uuid === task.uuid) {
                ret = element;
            }
        });

        return ret;
    }

    taskchanged = (task) => {

        let tasks = this.state.tasks;

        let foundTask = this.getTask(task);

        tasks[tasks.indexOf(foundTask)] = task;

        this.setState({ tasks: tasks });

        console.log('taskchanged', this.state.tasks);

    }

    taskadd = (task) => {
        let tasks = this.state.tasks;

        tasks.push(task);

        this.setState({ tasks: tasks });

        console.log('taskchanged', this.state.tasks);
    }

    newTask = () => {
        this.setState({ showEditCreate: true, edit: false });
    }

    editTask = (taskid) => {
        this.setState({ showEditCreate: true, edit: true, taskid: taskid });
    }

    hide = () => {
        this.setState({ showEditCreate: false });
    }

    render() {
        let isSubAccount = !this.state.user.email;

        return (
            <>
                {isSubAccount ?
                    this.state.subAccounts.map(subAccount => (
                        <TaskList user={subAccount} key={subAccount.id} tasks={this.state.tasks} />
                    )
                    ) : (
                        <div>
                            {!this.state.showEditCreate && <button onClick={() => this.newTask()}>Neu</button>}

                            {this.state.showEditCreate && <EditTask
                                hideOnClick={this.hide}
                                taskadd={this.taskadd}
                                taskchanged={this.taskchanged}
                                editTask={this.state.edit}
                                taskid={this.state.taskid} />
                            }

                            {!this.state.showEditCreate && <TaskList user={this.state.user} key={this.state.user.id} tasks={this.state.tasks} editTask={this.editTask} />}
                        </div>
                    )
                }
            </>
        );
    }
}

export default Tasks;