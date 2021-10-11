import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class Task extends React.Component {
    render() {
        let isMainAccount = Boolean(this.props.user.email);

        return (
            <div>
                <Accordion defaultActiveKey="1">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <ul style={{ listStyleType: 'none' }}>
                                <li style={{ display: 'inline-block', float: 'left' }}>{this.props.task.name}</li>
                                <li style={{ display: 'inline-block', float: 'right' }}>{this.props.task.weight}</li>
                            </ul>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                {this.props.task.description}

                                {isMainAccount ? (
                                    <>
                                        <Button onClick={() => this.props.verify(this.props.task.uuid)}>Verifizieren</Button>
                                        <Button onClick={() => this.props.edit(this.props.task.uuid)}>Bearbeiten</Button>
                                        <Button onClick={() => this.props.delete(this.props.task.uuid)}>Löschen</Button>
                                    </>
                                ) : (
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Erledigt" onClick={() => this.props.edit(this.props.task.uuid)} />
                                        </Form.Group>
                                    </Form>
                                )}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

export default Task;