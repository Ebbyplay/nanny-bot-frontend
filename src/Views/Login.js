import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import { Container, Tab, Tabs } from 'react-bootstrap';

import LoginWizard from '../Components/Wizard/LoginWizard';
import SignupWizard from '../Components/Wizard/SignupWizard';

class Login extends Component {
    render() {
        let { currentUser } = this.props.UserStore;

        if (currentUser && currentUser.id)
            return <Redirect to="/tasks" />

        return (
            <Container>
                <Tabs className="mb-3">
                    <Tab eventKey="login" title="Anmelden"><LoginWizard /></Tab>
                    <Tab eventKey="signup" title="Registrieren"><SignupWizard /></Tab>
                </Tabs>
                
            </Container>
        );
    }
}

export default inject('UserStore')(observer(Login));
