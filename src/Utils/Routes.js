import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getSessionStorage } from './Session';
 
// private routen - sitzung erforderlich
export const PrivateRoute = function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>  getSessionStorage('user') ? <Component {...props} user={rest.user} subaccounts={rest.subaccounts} rootchangehandler={rest.rootchangehandler} /> : <Redirect exact to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    )
}

// öffentliche routen - keine sitzung erforderlich
export const PublicRoute = function PublicRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => !getSessionStorage('user') ? <Component {...props} user={rest.user} rootchangehandler={rest.rootchangehandler} /> : <Redirect exact to={{ pathname: '/dashboard' }} />}
        />
    )
}