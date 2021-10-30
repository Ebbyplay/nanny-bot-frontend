import { Component, React } from 'react';

import User from './User';

class UserSelect extends Component {
    render() {
        const { users } = this.props;

        return (
            users.map((user) => (
                <User key={user[1].uuid} user={user[1]} />
            ))
        )
    }
}

export default UserSelect;
