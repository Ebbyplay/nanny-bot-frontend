import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { signupMain } from '../Utils/CallMaster';
import NannyForm from '../Components/NannyForm';

/**
 * path: /signup
 */
class Signup extends React.Component {
    state = {
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

            let user = res.data;

            if (!user)
                return;
        })
        .catch((err) => {
            // todo: error-handling?
        });
    }

    render() {
        if (this.props.user)
            return <Redirect to='/dashboard' />

        let options = {
            form_elements: [
                {
                    type: 'text',
                    name: 'name',
                    placeholder: 'Benutzername eingeben',
                    onChange: this.onChange
                },
                {
                    type: 'email',
                    name: 'email',
                    placeholder: 'E-Mail eingeben',
                    onChange: this.onChange
                },
                {
                    type: 'password',
                    name: 'password',
                    placeholder: 'Passwort',
                    onChange: this.onChange
                },
                {
                    type: 'password',
                    name: 'repassword',
                    placeholder: 'Passwort wiederholen',
                    onChange: this.onChange
                }
            ],
            additional_elements: [
                {
                    text: 'Du hast schon einen Account?',
                    navlink_text: 'Hier anmelden'
                }
            ],
            form_buttons: [
                {
                    value: 'Registrieren',
                    onClick: this.onClick
                }
            ]
        };

        return (
            <>
            <Container>
                <NannyForm options={options} />
            </Container>
        </>
        )
    }
}

export default Signup;