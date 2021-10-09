import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Button, Col, Form, Row } from 'react-bootstrap';

import NannyAvatar from '../Components/NannyAvatar';

/**
 * path: /settings
 */
class Settings extends React.Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    /**
     * @todo
     */
    applyNewSettings = () => {
        // backend call und werte uebernehmen
    }

    render() {
        if (!this.props.user)
            return <Redirect exact to='/login' />

        return (
            <Container>
                <NannyAvatar user={this.props.user} click={this.props.click} />

                <Form>
                    <Row className="align-items-center">
                        <Col className="my-1">
                            <Form.Label>Neuer Benutzername</Form.Label>
                            <Form.Control name="name" type="username" placeholder={this.props.user.name} value={this.state.name} onChange={this.onChange} />
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col className="my-1">
                            <Form.Label>Neue Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder={this.props.user.email} value={this.state.email} onChange={this.onChange} />
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col className="my-1">
                            <Form.Label>Neues Passwort</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Passwort" value={this.state.password} onChange={this.onChange} />
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col className="my-1">
                            <Button variant="primary" onClick={this.tryLogin}>
                                Anwenden
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}

export default Settings;