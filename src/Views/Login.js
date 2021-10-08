import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';

import { getAllSubAccounts, login } from '../Utils/CallMaster';
import NannyImageGrid from '../Components/NannyImageGrid';
import NannyAvatarGrid from '../Components/NannyAvatarGrid';
import NannyForm from '../Components/NannyForm';

/**
 * path: /login
 */
class Login extends React.Component {
    state = {
        allImages: [],
        selectedImages: [],
        email: null,
        password: null,
        mainAccount: null,
        subAccount: null,
        subAccounts: [],
        firstLogin: true,
        secondLogin: false
    };

    componentDidMount() {
        // todo: besser umsetzen (vorhandene bilder erst auslesen und damit iterieren anstelle den ziffern)
        let allImages = [];

        for (let i = 0; i < 9; i++) {
            let image = {};

            image.index = i;
            image.path = `/tile00${i}.png`;
            image.name = `tile00${i}`;

            allImages.push(image);
        }

        this.setState({allImages: allImages});
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
     */
    handleFirstLogin = () => {
        let { email, password } = this.state;

        login(email, password)
        .then((res) => {
            let user = res.data;

            if (!user)
                return;

            this.setState({
                mainAccount: user,
                firstLogin: false
            });

            getAllSubAccounts(user.id)
            .then((res) => {
                let subAccounts = res.data;

                if (!subAccounts)
                    return;

                this.setState({subAccounts: subAccounts});
            })
        })
    }

    /**
     * @todo error handling/ error msg on failed login attempt
     * is triggered when a Avatar is clicked
     * post request to backend with email and password. returns a user object on success
     */
    handleSecondLogin = (account) => {
        this.setState({
            secondLogin: true,
            subAccount: account
        });
    }

    /**
     * is triggered when selecting an image for the second login
     * @param {Object} image 
     */
    toggleImage = (image) => {
        let selectedImages = this.state.selectedImages;

        if (selectedImages.indexOf(image) !== -1)
            selectedImages.splice(selectedImages.indexOf(image), 1);
        else
            selectedImages.push(image);

        this.setState({'selectedImages': selectedImages});
    }

    submitImagePassword = () => {
        let { mainAccount, selectedImages } = this.state,
            selectedAccount = this.state.subAccount;

        let password = '',
            user = selectedAccount.id;

        if (selectedImages.length < 3)
            return;

        selectedImages.forEach((image) => {
            password += image.name;
        })

        if (mainAccount.id === selectedAccount.id) {
            user = selectedAccount.email;
        }

        login(user, password)
        .then((res) => {
            let user = res.data;

            if (!user)
                return;

            console.log('zweites Login response', user);

            this.props.userchanged(user);
        })
    }

    render() {
        if (this.props.user)
            return <Redirect to='/dashboard' />

        let users = this.state.subAccounts.concat(this.state.mainAccount),
            firstLogin = this.state.firstLogin,
            secondLogin = this.state.secondLogin,
            allImages = this.state.allImages,
            selectedImages = this.state.selectedImages;

        let options = {
            form_elements: [
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
                }
            ],
            additional_elements: [
                {
                    text: 'Noch keinen Account?',
                    navlink_text: 'Hier registrieren'
                }
            ],
            form_buttons: [
                {
                    value: 'Anmelden',
                    onClick: this.onClick
                }
            ]
        };

        return (
            <>
                {firstLogin ? (
                    <>
                        <Container>
                            <NannyForm options={options} />
                        </Container>
                    </>
                ) : secondLogin ? (
                    <>
                        <Form>
                            <Form.Label>Bilder Passwort</Form.Label>
                            <NannyImageGrid images={allImages} selectedImages={selectedImages} toggleImage={this.toggleImage} />
                            <Row>
                                <Col className="my-1">
                                    <Button variant="primary" onClick={this.submitImagePassword}>
                                        Anmelden
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </>
                ) : (
                    <>
                        <Container>
                            <h3>Benutzer auswählen:</h3>
                            <NannyAvatarGrid users={users} click={this.handleSecondLogin} />
                        </Container>
                    </>
                )}
            </>
        )
    }
}

export default Login;