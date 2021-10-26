import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import LoginWizard from '../Components/Wizard/LoginWizard';

class Login extends Component {
    render() {
        if (this.props.UserStore.currentUser && this.props.UserStore.currentUser.id)
            return <Redirect to="/tasks" />

        return (
            <Container>
                <LoginWizard />
            </Container>
        );
    }
}

export default inject('UserStore')(observer(Login));;;
