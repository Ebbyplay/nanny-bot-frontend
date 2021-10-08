import React from 'react';
import { getSessionStorage } from '../Utils/Session';
import TaskList from '../Components/TaskList'
import { getAllSubAccounts } from '../Utils/CallMaster';

/**
 * path: /shop
 */
class Tasks extends React.Component {
    state = {
        user: getSessionStorage('user'),
        subAccounts: []
    }

    componentDidMount() {
        if (!this.state.user.email)
            return;

        getAllSubAccounts(this.state.user.id)
        .then((subAccounts) => {
            this.setState({subAccounts: subAccounts});
        })
        .catch((err) => {
            console.log('could not get all sub accounts', err);
        })
    }

    render() {
        let isSubAccount = !this.state.user.email;

        return (
            <>
                <p>todo: tasks view</p>
                {isSubAccount ? 
                        this.state.subAccounts.map(subAccount => (
                            <TaskList user={subAccount} key={subAccount.id} />
                        )
                    ) : (
                        <TaskList user={this.state.user} key={this.state.user.id} />
                    )
                }
            </>
        );
    }
}

export default Tasks;