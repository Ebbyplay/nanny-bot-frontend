import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { login } from '../../Utils/CallMaster';

class Step1 extends React.Component {
    /**
     * is triggered when clicking on the 'Anmelden' button
     */
    tryLogin = () => {
        if (!this.props.data.email || !this.props.data.password)
            return alert('ungueltige eingabe!');

        login(this.props.data.email, this.props.data.password)
        .then((res) => {
            let user = res.data;

            if (!user)
                return alert('anmelden fehlgeschlagen!');

            this.props.data.mainAccount = user;
            this.props.next();
        })
    }

    render() {
        return (
            <Form>
                <Row className="align-items-center">
                    <Col className="my-1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="E-Mail eingeben" value={this.props.data.email} onChange={this.props.handleChange} />
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
                        <Form.Text className="text-muted">
                            Noch keinen Account? <br />
                            <NavLink activeClassName="active" to="/signup">Hier registrieren</NavLink>
                        </Form.Text>
                    </Col>
                    <Col className="my-1">
                        <Button variant="primary" onClick={this.tryLogin}>
                            Weiter
                        </Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default Step1;