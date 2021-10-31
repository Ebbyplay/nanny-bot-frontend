import { Component, React } from 'react';

class User extends Component {
    render() {
        // const { user } = this.props;

        // TODO: User Avatar + Name anzeigen
        // bei klick auf user: this.props.select(user) ausfuehren
        return (
            <p onClick={() => {this.props.submit(this.props.user)}}>user</p>
        )
    }
}

export default User;
