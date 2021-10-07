import React from 'react';
import { setSessionStorage } from '../Utils/Session';
import { signupMain } from '../Utils/CallMaster';

/**
 * path: /signup
 */
class Signup extends React.Component {
    state = {
        username: null,
        email: null,
        password: null
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
        let { username, email, password } = this.state;

        signupMain(username, email, password)
        .then((res) => {
            console.log('%c signup response', 'color:green', res);

            if (!res.data)
                return;

            setSessionStorage('user', res.data);
        })
        .catch((err) => {
            // todo: error-handling?
        });

        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <>
                Registrieren<br /><br />
                <form>
                    <div>
                        Username<br />
                        <input type="text" name="username" autoComplete="username" onChange={this.onChange} />
                    </div>
                    <div>
                        Email<br />
                        <input type="text" name="email" autoComplete="email" onChange={this.onChange} />
                    </div>
                    <div>
                        Passwort<br />
                        <input type="password" name="password" autoComplete="new-password" onChange={this.onChange} />
                    </div>
                    <input type="button" value='Registrieren' onClick={this.handleSignup} /><br />
                </form>
            </>
        )
    }
}

export default Signup;