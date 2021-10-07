import React from 'react';
import { Redirect } from 'react-router-dom';
import { getSessionStorage, setSessionStorage } from '../Utils/Session';
import { login } from '../Utils/CallMaster';

/**
 * path: /login
 */
class Login extends React.Component {
    state = {
        user: getSessionStorage('user'),
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
     * @todo check if 'email' and 'password' are set
     * @todo error handling/ error msg on failed login attempt
     * 
     * is triggered when the "Anmelden" button is clicked
     * post request to backend with email and password. returns a user object on success
     * @param {*} e 
     */
    handleLogin = (e) => {
        let { email, password } = this.state;

        login(email, password)
        .then((res) => {
            console.log('%c login response', 'color:green', res);

            if (!res.data)
                return;

            setSessionStorage('user', res.data);  
            this.props.history.push('/dashboard');
        })
        .catch((err) => {
            // todo: error-handling?
        });
    }

    render() {
        if (this.state.user)
            return <Redirect to='/dashboard' />

        return (
            <>
                Login<br /><br />
                <form>
                    <div>
                        Email<br />
                        <input type="text" name="email" autoComplete="email" onChange={this.onChange} />
                    </div>
                    <div>
                        Passwort<br />
                        <input type="password" name="password" autoComplete="new-password" onChange={this.onChange} />
                    </div>
                    <input type="button" value='Anmelden' onClick={this.handleLogin} /><br />
                </form>
            </>
        )
    }
}

export default Login;