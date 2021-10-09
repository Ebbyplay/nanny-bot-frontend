import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Step1 extends React.Component {
    validateForm = () => {
        // if input gucci dann this.props.next()
        if (!this.props.data.name || !this.props.data.email || !this.props.data.password || !this.props.data.repassword)
            return alert('ungueltige eingabe');

        if (this.props.data.password !== this.props.data.repassword)
            return alert('passwoerter stimmen nicht ueberein');

        this.props.next();
    }

    render() {
        return (
            <Form>
                <Row className="align-items-center">
                    <Col className="my-1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="username" placeholder="Name eingeben" value={this.props.data.name} onChange={this.props.handleChange} />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col className="my-1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="E-Mail" value={this.props.data.email} onChange={this.props.handleChange} />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col className="my-1">
                        <Form.Label>Passwort</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Passwort" value={this.props.data.password} onChange={this.props.handleChange} />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col className="my-1">
                        <Form.Label>Passwort wiederholen</Form.Label>
                        <Form.Control name="repassword" type="password" placeholder="Passwort" value={this.props.data.repassword} onChange={this.props.handleChange} />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col className="my-1">
                        <Form.Text className="text-muted">
                            Du hast schon einen Account? <br />
                            <NavLink activeClassName="active" to="/login">Hier anmelden</NavLink>
                        </Form.Text>
                    </Col>
                    <Col className="my-1">
                        <Button variant="primary" onClick={this.validateForm}>
                            Weiter
                        </Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default Step1;