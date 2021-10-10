import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import NannyForm from '../Components/SettingsForm';

/**
 * path: /settings
 */
class Settings extends React.Component {
    changeAvatar = () => {
        // TODO: 
        console.log('todo: open imageSelector')
    }

    applyNewSettings = (newUserSettings) => {
        // TODO: backend call und werte uebernehmen
        console.log('todo: apply new settings', newUserSettings)
    }

    render() {
        let isMainAccount = Boolean(this.props.user.email),
            style = {
                width: '300px'
            };

        return (
            <Container>
                {isMainAccount ? (
                    <Tabs defaultActiveKey="main" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="main" title="Dein Account">
                            <div style={style}>
                                <NannyForm key={this.props.user.key} user={this.props.user} apply={this.applyNewSettings} />
                            </div>
                        </Tab>
                        <Tab eventKey="sub" title="Kinder">
                            <div style={style}>
                                {this.props.subaccounts.map((user) => (
                                    <NannyForm key={user.id} user={user} apply={this.applyNewSettings} />
                                ))}
                            </div>
                        </Tab>
                    </Tabs>
                ): (
                    <NannyForm user={this.props.user} apply={this.applyNewSettings} />
                )}
            </Container>
        )
    }
}

export default Settings;