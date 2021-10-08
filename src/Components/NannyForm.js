import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class NannyForm extends React.Component {
    render() {
        return (
            <>
                <Container>
                    {this.props.options.form_elements.map(form_element => (
                        <>

                        </>
                    ))}

                    {this.props.options.additional_elements.map(additional_element => (
                        <>

                        </>
                    ))}

                    {this.props.options.form_buttons.map(button => (
                        <>

                        </>
                    ))}

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
                                <Button variant="primary" onClick={this.handleFirstLogin}>
                                    Anmelden
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </>
        );
    }
}
 
export default NannyForm;