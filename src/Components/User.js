import { Component, React } from 'react';

class User extends Component {
    render() {
        const { user } = this.props;

        // TODO: User Avatar anzeigen
        return (
            <p onClick={() => {this.props.select(user)}}>
                {user.name}
            </p>
        )
    }
}

export default User;
