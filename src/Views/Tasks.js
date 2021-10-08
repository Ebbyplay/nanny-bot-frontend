import React from 'react';

import TaskList from '../Components/TaskList'
import { getAllSubAccounts } from '../Utils/CallMaster';

/**
 * path: /shop
 */
class Tasks extends React.Component {
    state = {
        subAccounts: []
    }

    componentDidMount() {
        if (!this.state.user.email)
            return;

        getAllSubAccounts(this.props.user.id)
        .then((subAccounts) => {
            this.setState({subAccounts: subAccounts});
        })
        .catch((err) => {
            console.log('could not get all sub accounts', err);
        })
    }

    render() {
        let isSubAccount = !this.props.user.email;

        return (
            <>
                <p>todo: tasks view</p>
                {isSubAccount ? 
                        this.state.subAccounts.map(subAccount => (
                            <TaskList user={subAccount} key={subAccount.id} />
                        )
                    ) : (
                        <TaskList user={this.props.user} key={this.props.user.id} />
                    )
                }
            </>
        );
    }
}

export default Tasks;