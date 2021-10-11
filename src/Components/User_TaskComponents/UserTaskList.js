import React from "react";
import UserTask from "./UserTask";

import "./UserTasks.css"


class UserTaskList extends React.Component {


    render() {

        return (
            <div className="user-task-list">
                {
                    this.props.user_tasks === [] ? (
                        <span>Für dich gibt es noch keine Aufgaben :)<br />Du bist frei. Geh spielen!</span>
                    ) : (
                        <>
                            <span>Aufgaben:</span>
                            {
                                this.props.user_tasks.map((user_task) => (
                                    <UserTask key={user_task.id} user_task={user_task} completeTask={this.props.completeTask} />
                                ))
                            }
                        </>
                    )
                }

            </div>
        )
    }
}
export default UserTaskList;