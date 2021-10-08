import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';

import { getSessionStorage, setSessionStorage } from '../Utils/Session';
import { login } from '../Utils/CallMaster';

/**
 * path: /login
 */
class Login extends React.Component {
    state = {
        user: null,
        email: null,
        password: null
    };

    componentDidMount() {
        let user = this.props.user ? this.props.user : getSessionStorage('user');

        if (user)
            this.setState({user: user});
    }

    /**
     * is triggered when typing in input fields
     * @param {*} e 
     */
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    /**
     * @todo error handling/ error msg on failed login attempt
     * 
     * is triggered when the "Anmelden" button is clicked
     * post request to backend with email and password. returns a user object on success
     * @param {*} e 
     */
    handleLogin() {
        let { email, password } = this.state;

        login(email, password)
        .then((res) => {
            console.log('%c login response', 'color:green', res);

            if (!res.data)
                return;

            let user = res.data;

            this.setState({user: user});
            setSessionStorage('user', user);

            this.props.userChanged(user);
            this.props.history.push('/dashboard');
        })
        .catch((err) => {
            // todo: error-handling?
        });
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
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="E-Mail eingeben" onChange={this.onChange} />
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
                                <Form.Text className="text-muted">
                                    Noch keinen Account? <br />
                                    <NavLink activeClassName="active" to="/signup">Hier registrieren</NavLink>
                                </Form.Text>
                            </Col>
                            <Col className="my-1">
                                <Button variant="primary" onClick={this.handleLogin}>
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

export default Login;