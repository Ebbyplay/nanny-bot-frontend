import { Component, React } from 'react';

import User from './User';

class UserSelect extends Component {
    render() {
        const { users } = this.props;

        return (
            users.map((user) => (
                // <User key={user[1].uuid} user={user[1]} select={this.props.select} />
                <User key={user.uuid} user={user} select={this.props.select} />
            ))
        )
    }
}

export default UserSelect;
