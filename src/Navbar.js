import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './Utils/Routes';
import { getSessionStorage } from './Utils/Session';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';

/**
 * navbar
 */
class Navbar extends React.Component {
    state = {
        user: getSessionStorage('user')
    }

    render() {
        return (
            <div className="App">
            <BrowserRouter>
                <div>
                <ul className="header">
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/login">Anmelden</NavLink></li>
                    <li><NavLink activeClassName="active" to="/signup">Registrieren</NavLink></li>
                    <li><NavLink activeClassName="active" to="/dashboard">Übersicht</NavLink></li>
                </ul>
                <div className="content">
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <PublicRoute path="/login" component={Login} />
                    <PublicRoute path="/signup" component={Signup} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    </Switch>
                </div>
                </div>
            </BrowserRouter>
            </div>
        )
    }
}

export default Navbar;