import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import NannyAvatarGrid from './AvatarGrid';


class UserSelect extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        let users = this.props.subaccounts;
        
        if (!this.props.user.email && users.indexOf(this.props.mainuser) === -1)
            users.push(this.props.mainuser);

        this.setState({
            users: users
        });
    }

    selectUser = (user) => {
        if (user.id === this.props.user.id) {
            this.props.change('userselect', false);
            return;
        }

        this.props.change('userselect', false);
        this.props.change('user', user);
    }

    render() {
        let style = {
            width: '25px',
            height: '25px'
        };

        return (
            <div>
                <span>Benutzer wechseln:</span>
                <NannyAvatarGrid users={this.state.users} click={this.selectUser} imageStyle={style} />
            </div>
        )
    }
}

export default UserSelect;