import { Component, React } from 'react';
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import LoginWizard from '../Components/Wizard/LoginWizard';

class Login extends Component {
    render() {
        const { user } = this.props.AuthStore;

        if (user.email)
            return <Redirect exact to='/dashboard' />

        return (
            <Container>
                <LoginWizard />
            </Container>
        );
    }
}

export default inject('AuthStore')(observer(Login));
