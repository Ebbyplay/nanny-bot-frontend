import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Form } from 'react-bootstrap';

import Error from '../../Widgets/Error';
import Loading from '../../Widgets/Loading';

class Step1 extends Component {
    handleSubmit = () => {
        this.props.AuthStore.signup();
    }

    render() {
        const { errors, isLoading } = this.props.AuthStore;

        if (isLoading)
            return <Loading />

        return (
            <div>
                <Error error={errors} />

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Name" value={this.props.AuthStore.name} onChange={ (e) => this.props.AuthStore.setUsername(e.target.value) } />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="E-Mail eingeben" value={this.props.AuthStore.email} onChange={ (e) => this.props.AuthStore.setEmail(e.target.value) } />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Passwort</Form.Label>
                        <Form.Control type="password" placeholder="Passwort" value={this.props.AuthStore.password} onChange={ (e) => this.props.AuthStore.setPassword(e.target.value) } />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Passwort wiederholen</Form.Label>
                        <Form.Control type="password" placeholder="Passwort" value={this.props.AuthStore.rePassword} onChange={ (e) => this.props.AuthStore.setRePassword(e.target.value) } />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlSubmit1">
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Registrieren
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default inject('AuthStore')(observer(Step1));
