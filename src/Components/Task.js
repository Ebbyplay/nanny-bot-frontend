import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class Task extends React.Component {
    editTask = (e) => {
        console.log('editTask', e, this.props.task)
    }

    verifyTask = (e) => {
        console.log('verifyTask', e, this.props.task);
    }

    checkTask = (e) => {
        console.log('checkTask', e);
    }

    render() {
        let isSubAccount = !this.props.user.email;

        return (
            <div>
                <Accordion defaultActiveKey="1">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <ul style={{listStyleType: 'none'}}>
                                <li style={{display: 'inline-block', float: 'left'}}>{this.props.task.name}</li>
                                <li style={{display: 'inline-block', float: 'right'}}>{this.props.task.weight}</li>
                            </ul>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                {this.props.task.description}

                                {isSubAccount ? (
                                    <input type="checkbox" onClick={this.checkTask} />
                                ) : (
                                    <>
                                        <input type="Button" defaultValue="Verifizieren" onClick={this.verifyTask} />
                                        <input type="Button" defaultValue="Bearbeiten" onClick={this.editTask} />
                                    </>
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