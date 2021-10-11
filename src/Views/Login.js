import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import LoginWizard from '../Components/Wizard/LoginWizard';

/**
 * path: /login
 */
class Login extends React.Component {
    render() {
        if (this.props.user)
            return <Redirect exact to='/dashboard' />

        return (
            <Container>
                <LoginWizard rootchangehandler={this.props.rootchangehandler} />
            </Container>
        )
    }
}

export default Login;