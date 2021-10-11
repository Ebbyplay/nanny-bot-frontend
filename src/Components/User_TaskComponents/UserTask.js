import React from "react";
import { getTask } from "../../Utils/CallMaster";

import { createDate } from "../../Utils/Time";
import "./UserTasks.css"

class UserTask extends React.Component {
    state = {
        task: {},
    }

    componentDidMount() {
        getTask(this.props.user_task.taskId)
            .then((res) => {
                this.setState({
                    task: res.data
                })
            })
            .catch((err) => {
                console.log("Could not get task ", err);
            })
    }

    completeTask = (e) => {
        this.props.completeTask(e.target.name)
    }

    render() {

        return (
            <>
                <div className="user-task">
                    <div>
                        <div>
                            Name: {this.state.task.name} <br />
                            Beschreibung:<br />
                            {this.state.task.description}
                        </div>
                        <div>
                            {
                                this.props.user_task.completetAt != null ? (
                                    <>
                                        Du hast diese Aufgabe am {createDate(this.props.user_task.completetAt)} als erledigt markiert.
                                    </>
                                ) : (
                                    <input type="button" value="Abschließen" name={this.props.user_task.id} onClick={(e) => this.completeTask(e)} />
                                )
                            }

                        </div>
                    </div>
                    <div>
                        {this.state.task.imagePath}
                        <img src="/favicon.ico" alt="" />
                    </div>
                </div>
            </>

        )
    }

}
export default UserTask;