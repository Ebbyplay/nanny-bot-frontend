import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Form } from 'react-bootstrap';

import Error from '../Widgets/Error';

class Step1 extends Component {
    handleSubmit = () => {
        this.props.AuthStore.firstLogin()
        .then(() => {
            this.props.next();
        })
        .catch((err) => {
            // fehlermeldung - falsche email/ passwort falsch
        })
    }

    render() {
        const { errors } = this.props.AuthStore;

        return (
            <>
                <Error error={errors} />

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="E-Mail eingeben" value={this.props.AuthStore.email} onChange={ (e) => this.props.AuthStore.setEmail(e.target.value) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Passwort</Form.Label>
                        <Form.Control type="password" placeholder="Passwort" value={this.props.AuthStore.password} onChange={ (e) => this.props.AuthStore.setPassword(e.target.value) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlSubmit1">
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Anmelden
                        </Button>
                    </Form.Group>
                </Form>
            </>
        )
    }
}

export default inject('AuthStore')(observer(Step1));
