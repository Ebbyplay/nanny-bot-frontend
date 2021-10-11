import React from "react";
import { getTask } from "../../Utils/CallMaster";

import { createDate } from "../../Utils/Time"

class AdminUserTask extends React.Component {
    state = {
        task: {},
    }

    componentDidMount() {
        getTask(this.props.user_task.taskId)
            .then((res) => {
                this.setState({
                    task: res.data,
                })
            })
            .catch((err) => {
                console.log("Could not get task ", err)
            })
    }

    verify = (e) => {
        this.props.verify(e.target.name)
    }

    reject = (e) => {
        console.log("REJECT 1", this.props.user_task);
        this.props.reject(e.target.name)
    }

    render() {
        const task = this.state.task;
        const user_task = this.props.user_task;
        return (
            <div className="user-task">
                <div className="content">
                    {task.name}<br />
                    {
                        this.props.user_task.completedAt != null ? (
                            <>
                                Abgeschlossen am {createDate(this.props.user_task.completedAt)}<br />
                                {/* show only if user_reward is claimed */}
                                <input
                                    type="Button"
                                    value="GEPRÜFT"
                                    name={user_task.id}
                                    onClick={(e) => this.verify(e)}
                                />
                                <input
                                    type="Button"
                                    value="ABLEHNEN"
                                    name={user_task.id}
                                    onClick={(e) => this.reject(e)}
                                />
                            </>
                        ) : (
                            <div>
                                Diese Aufgabe wurde noch nicht abgeschlossen.
                            </div>
                        )
                    }

                </div>
                <div>
                    {task.imagePath}
                    <img src="/favicon.ico" alt="" />
                </div>
            </div>
        )
    }
}
export default AdminUserTask;