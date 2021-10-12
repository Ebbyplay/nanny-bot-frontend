import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import NannyImageGrid from '../Components/ImageGrid';

class NannyForm extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        selectedImages: []
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    toggleImage = (images) => {
        this.setState({
            selectedImage: images
        })
    }

    // TODO:
    validateForm = () => {
        console.log('todo: validate that shit');
        this.props.apply(this.state);
    }

    render() {
        let isMainAccount = Boolean(this.props.user.email);

        return (
            <>
                <Form>
                    <Row className="align-items-center">
                        <Col className="my-1">
                            <Form.Label>Neuer Benutzername</Form.Label>
                            <Form.Control name="name" type="username" placeholder={this.props.user.name} value={this.state.name} onChange={this.onChange} />
                        </Col>
                    </Row>

                    {isMainAccount ? (
                        <>
                            <Row className="align-items-center">
                                <Col className="my-1">
                                    <Form.Label>Neue E-Mail</Form.Label>
                                    <Form.Control name="email" type="email" placeholder={this.props.user.email} value={this.state.email} onChange={this.onChange} />
                                </Col>
                            </Row>

                            <Row className="align-items-center">
                                <Col className="my-1">
                                    <Form.Label>Neues Passwort</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Passwort" value={this.state.password} onChange={this.onChange} />
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <>
                        </>
                    )}

                    <Row className="align-items-center">
                        <Col className="my-1">
                            <Form.Label>Neues Bilder Passwort:</Form.Label>
                            <NannyImageGrid click={this.toggleImage} />
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col className="my-1">
                            <Button variant="primary" onClick={this.validateForm}>
                                Speichern
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </>
        );
    }
}
 
export default NannyForm;