import { Component, React } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import LoginWizard from '../Components/Wizard/Login/LoginWizard';
import SignupWizard from '../Components/Wizard/Signup/SignupWizard';

class Login extends Component {
    render() {
        return (
            <Tabs className="mb-3">
                <Tab eventKey="login" title="Anmelden"><LoginWizard {...this.props} /></Tab>
                <Tab eventKey="signup" title="Registrieren"><SignupWizard {...this.props} /></Tab>
            </Tabs>
        );
    }
}

export default Login;
