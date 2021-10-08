import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Redirect } from 'react-router-dom';

import { getSessionStorage } from '../Utils/Session';
import NannyAvatar from '../Components/NannyAvatar';
import { Container } from 'react-bootstrap';

/**
 * path: /dashboard
 */
class Dashboard extends React.Component {
    state = {
        user: null,
        subAccounts: []
    }

    componentDidMount() {
        console.log('dashboard load:', this);
        let user = this.props.user ? this.props.user : getSessionStorage('user');

        if (user) {
            this.setState({user: user});
        }
    }

    render() {
        if (!this.state.user)
            return <Redirect to='/dashboard' />

        return (
            <>
                <Container>
                    <strong>Benutzer auswählen:</strong>

                    <ul>
                        <div key={this.state.user.id}>
                            <NannyAvatar user={this.state.user} />
                        </div>

                        {this.state.subAccounts.map(subAccount => (
                            <NannyAvatar key={subAccount.id} user={subAccount} />
                        ))}
                    </ul>
                </Container>
            </>
        );
    }
}

export default Dashboard;