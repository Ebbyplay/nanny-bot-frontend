import React from 'react';
import { Redirect } from 'react-router-dom';

import { clearSessionStorage } from '../Utils/Session';
/**
 * path: /logout
 */
class Logout extends React.Component {
    componentDidMount() {
        clearSessionStorage();

        this.props.rootchangehandler('user', null);
        this.props.rootchangehandler('mainuser', null);
        this.props.rootchangehandler('changetouser', null);
        this.props.rootchangehandler('subaccounts', []);
    }

    render() {
        return <Redirect to="/login" />
    }
}

export default Logout;