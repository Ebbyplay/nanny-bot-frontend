import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Container, Button, Tab, Tabs, Row, Col, Form } from 'react-bootstrap';

import NannyForm from '../Components/SettingsForm';
import NannyImageGrid from '../Components/ImageGrid';
import { signupSub } from '../Utils/CallMaster';

/**
 * path: /settings
 */
class Settings extends React.Component {
    state = {
        createView: false,
        name: '',
        selectedImages: []
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    toggleImage = (images) => {
        this.setState({
            selectedImages: images
        })
    }

    toggleView = () => {
        this.setState({
            createView: !this.state.createView
        })
    }

    changeAvatar = () => {
        // TODO: 
        console.log('todo: open imageSelector')
    }

    applyNewSettings = (newUserSettings) => {
        // TODO: backend call und werte uebernehmen
        console.log('todo: apply new settings', newUserSettings)
    }

    createUser = () => {
        let password = '';

        this.state.selectedImages.forEach((image) => {
            password += image.name;
        })

        signupSub(this.props.user.id, this.state.name, password)
        .then((res) => {
            let newSubAccount = res.data;

            if (!newSubAccount)
                return;

            this.props.rootchangehandler('subaccounts', this.props.subacounts.concat(newSubAccount));
        })
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
                                {this.state.createView ? (
                                    <Form>
                                        <Row className="align-items-center">
                                            <Col className="my-1">
                                                <Form.Label>Benutzername</Form.Label>
                                                <Form.Control name="name" type="username" placeholder="Name eingebene" value={this.state.name} onChange={this.onChange} />
                                            </Col>
                                        </Row>

                                        <Row className="align-items-center">
                                            <Col className="my-1">
                                                <Form.Label>Bilder Passwort:</Form.Label>
                                                <NannyImageGrid click={this.toggleImage} />
                                            </Col>
                                        </Row>

                                        <Row className="align-items-center">
                                            <Col className="my-1">
                                                <Button variant="primary" onClick={this.createUser}>
                                                    Erstellen
                                                </Button>
                                                <Button variant="primary" onClick={this.toggleView}>
                                                    Zurueck
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                )
                                : (
                                    <>
                                        {this.props.subaccounts.map((user) => (
                                            <NannyForm key={user.id} user={user} apply={this.applyNewSettings} />
                                        ))}

                                        <Button onClick={this.toggleView}>Account hinzufuegen</Button>
                                    </>
                                )}                       
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