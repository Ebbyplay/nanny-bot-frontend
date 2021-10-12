import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import SignupWizard from '../Components/Wizard/SignupWizard';

/**
 * path: /signup
 */
class Signup extends React.Component {
    render() {
        if (this.props.user)
            return <Redirect exact to='/dashboard' />

        return (
            <Container>
                <SignupWizard rootchangehandler={this.props.rootchangehandler} />
            </Container>
        )
    }
}

export default Signup;