import { Component, React } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Step1 extends Component {
    /**
     * is triggered when clicking on the 'Anmelden' button
     */
    tryLogin = () => {
        this.props.auth.login()
        .then((res) => {
            console.log(res)
        })
        
    }

    render() {
        return (
            <Form>
                <Row className="align-items-center">
                    <Col className="my-1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="E-Mail eingeben" value={this.props.auth.email} onChange={this.props.handleChange} />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col className="my-1">
                        <Form.Label>Passwort</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Passwort" value={this.props.auth.password} onChange={this.props.handleChange} />
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
