import React from "react";
import AdminUserTask from "./AdminUserTask";

class AdminUserTaskList extends React.Component {

    render() {

        return (
            <>
                {
                    this.props.user_tasks.map((user_task) => (
                        <AdminUserTask
                            user_task={user_task}
                            verify={this.props.verify}
                            reject={this.props.reject}
                            key={user_task.id}
                        />
                    ))
                }
            </>
        )

    }
}
export default AdminUserTaskList