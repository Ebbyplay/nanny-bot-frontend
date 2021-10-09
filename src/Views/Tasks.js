import React from 'react';

import TaskList from '../Components/TaskList'
import { getTasks } from '../Utils/CallMaster';

/**
 * path: /tasks
 */
class Tasks extends React.Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        getTasks(this.props.user.id)
        .then((res) => {
            let tasks = res.data;

            if (!tasks)
                return;

            this.setState({
                tasks: tasks
            });
        })
    }

    render() {
        let isSubAccount = this.props.user.email;

        return (
            <>
                <p>todo: tasks view</p>
                {isSubAccount ? 
                        this.props.subaccounts.map(subAccount => (
                            <TaskList user={subAccount} key={subAccount.id} tasks={this.state.tasks} />
                        )
                    ) : (
                        <TaskList user={this.props.user} key={this.root.user.id} />
                    )
                }
            </>
        );
    }
}

export default Tasks;