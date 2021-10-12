import React from "react";
import AdminUserTaskList from "../Components/AdminUserTasksComponents/AdminUserTaskList";
import SubAccDataSelector from "../Components/UtilComponents/SubAccDataSelector";
import { rejectUser_Task, verifyUser_Task } from "../Utils/CallMaster";

class AdminUserTasks extends React.Component {
    state = {
        user_tasks: [],
        dataType: "user_tasks",
    }

    getData = (data) => {
        this.setState({
            user_tasks: data,
        })
    }

    verify = (id) => {
        verifyUser_Task(id)
            .then((res) => {
                this.setState({
                    user_tasks: this.state.user_tasks.map((user_task) => {
                        if (user_task.id === id)
                            user_task = res.data;
                        return user_task;
                    })
                });
            })
            .catch((err) => {
                console.log("Could not verify user_task ", err);
            })
    }

    reject = (id) => {
        rejectUser_Task(id)
            .then((res) => {
                this.setState({
                    user_tasks: this.state.user_tasks.map((user_task) => {
                        if (user_task.id === id)
                            user_task = res.data;
                        return user_task;
                    })
                });
            })
            .catch((err) => {
                console.log("Could not reject user_task ", err);
            })
    }

    render() {

        return (
            <>
                <SubAccDataSelector getData={this.getData} dataType={this.state.dataType} user={this.props.user} />
                <AdminUserTaskList
                    user_tasks={this.state.user_tasks}
                    verify={this.verify}
                    reject={this.reject}
                />
            </>
        )
    }
}
export default AdminUserTasks;