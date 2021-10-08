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
            return <Redirect to='/dashboard' />

        return (
            <Container>
                <SignupWizard userchanged={this.props.userchanged} />
            </Container>
        )
    }
}

export default Signup;