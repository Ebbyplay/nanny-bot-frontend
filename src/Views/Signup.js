import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';

import { setSessionStorage } from '../Utils/Session';
import { signupMain } from '../Utils/CallMaster';

/**
 * path: /signup
 */
class Signup extends React.Component {
    state = {
        username: null,
        name: null,
        email: null,
        password: null,
        repassword: null
    };

    /**
     * is triggered when typing in input fields
     * @param {*} e 
     */
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    /**
     * @todo check if inputs are set
     * 
     * is triggered when the "Registrieren" button is clicked
     * post request to backend with email and password. returns a user object on success
     * @param {*} e 
     */
    handleSignup = (e) => {
        let { name, email, password, repassword } = this.state;

        signupMain(name, email, password, repassword)
        .then((res) => {
            console.log('%c signup response', 'color:green', res);

            if (!res.data)
                return;

            setSessionStorage('user', res.data);
        })
        .catch((err) => {
            // todo: error-handling?
        });

        this.props.history.push('/dashboard');
    }

    render() {
        if (this.state.user)
            return <Redirect to='/dashboard' />

        return (
            <>
            <Container>
                <Form>
                    <Row className="align-items-center">
                        <Col className="my-1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="email" placeholder="Name eingeben" onChange={this.onChange} />
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col className="my-1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="E-Mail" onChange={this.onChange} />
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col className="my-1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Passwort" onChange={this.onChange} />
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col className="my-1">
                            <Form.Label>Password wiederholen</Form.Label>
                            <Form.Control name="repassword" type="password" placeholder="Passwort" onChange={this.onChange} />
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col className="my-1">
                            <Form.Text className="text-muted">
                                Du hast schon einen Account? <br />
                                <NavLink activeClassName="active" to="/login">Hier Anmelden</NavLink>
                            </Form.Text>
                        </Col>
                        <Col className="my-1">
                            <Button variant="primary" onClick={this.handleSignup}>
                                Anmelden
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
        )
    }
}

export default Signup;