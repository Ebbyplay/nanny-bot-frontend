import React from 'react';

import TaskList from '../Components/TaskList'
import { getTasks } from '../Utils/CallMaster';

import EditTask from '../Components/EditCreateTask';

/**
 * path: /tasks
 */
class Tasks extends React.Component {
    state = {
        tasks: [],
        showEditCreate: false,
        edit: false,
        taskid: ''
    }

    componentDidMount() {
        getTasks(this.props.user.id)
        .then((res) => {
            console.log('response getTasks', res);

            let tasks = res.data;

            if (!tasks)
                return;

            
            this.setState({
                tasks: tasks
            });
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
        let tasks = this.state.tasks,
            foundTask = this.getTask(task);

        tasks[tasks.indexOf(foundTask)] = task;

        this.setState({
            tasks: tasks
        });

        console.log('taskchanged', this.state.tasks);
    }

    taskadd = (task) => {
        let tasks = this.state.tasks;

        tasks.push(task);

        this.setState({
            tasks: tasks
        });

        console.log('taskadd', this.state.tasks);
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
        let isSubAccount = this.props.user.email;

        return (
            <>
                {!isSubAccount ?
                    this.props.subaccounts.map(subAccount => (
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

                            {!this.state.showEditCreate && <TaskList user={this.props.user} key={this.props.user.id} tasks={this.state.tasks} editTask={this.editTask} />}
                        </div>
                    )
                }
            </>
        );
    }
}

export default Tasks;