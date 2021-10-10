import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import { HashRouter, Switch, Redirect, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { PrivateRoute, PublicRoute } from './Utils/Routes';
import { getSessionStorage, setSessionStorage, clearSessionStorage } from './Utils/Session';

import Tasks from './Views/Tasks';
import Shop from './Views/Shop';
import Login from './Views/Login';
import Signup from './Views/Signup';
import Settings from './Views/Settings';
import Admin_rewards from './Views/Admin_rewards';

class App extends React.Component {
    state = {
        user: getSessionStorage('user'),
        subaccounts: getSessionStorage('subaccounts')
    }

    /**
     * 
     * @param {String} key 
     * @param {*} value 
     */
    rootchangehandler = (key, value) => {
        setSessionStorage(key, value);

        this.setState({
            [key]: value
        });
    }

    /**
     * is triggered when the 'Abmelden' button is clicked
     * clear sessionStorage
     * redirect to 'login'
     */
     handleLogout = () => {
        clearSessionStorage();

        this.setState({
            user: null,
            subaccounts: []
        });
    }

    render() {
        return (
            <div className="App">
                <HashRouter>
                    <Navbar bg="light" variant="light">
                        <Container>
                            <Navbar.Brand>NannyBot</Navbar.Brand>
                            <Nav className="me-auto">
                                {this.state.user ? (
                                    <>
                                        <NavLink activeClassName="active" to="/tasks">Tasks</NavLink>
                                        <NavLink activeClassName="active" to="/shop">Shop</NavLink>
                                        {this.state.user.email ? (<NavLink activeClassName="active" to="/admin_rewards">Belohnungen</NavLink>) : <></>}
                                        <NavLink activeClassName="active" to="/settings">Einstellungen</NavLink>

                                        <Navbar.Toggle />
                                        <Navbar.Collapse className="justify-content-end">
                                            <Navbar.Text>
                                                Angemeldet als: {this.state.user.name}
                                            </Navbar.Text>
                                            <Nav.Link onClick={this.handleLogout}>Abmelden</Nav.Link>
                                        </Navbar.Collapse>
                                    </>
                                ) : (
                                    <>
                                        <NavLink activeClassName="active" to="/login">Anmelden</NavLink>
                                        <NavLink activeClassName="active" to="/signup">Registrieren</NavLink>
                                    </>
                                )}
                            </Nav>
                        </Container>
                    </Navbar>

                    <Switch>
                        <PublicRoute user={this.state.user}  path="/login" rootchangehandler={this.rootchangehandler} component={Login} />
                        <PublicRoute user={this.state.user}  path="/signup" component={Signup} />
                        <PrivateRoute user={this.state.user} subaccounts={this.state.subaccounts} path="/tasks" component={Tasks} />
                        <PrivateRoute user={this.state.user} path="/shop" component={Shop} />
                        <PrivateRoute user={this.state.user} subaccounts={this.state.subaccounts} rootchangehandler={this.rootchangehandler} path="/settings" component={Settings} />
                        <PrivateRoute user={this.state.user} path="/admin_rewards" component={Admin_rewards} />
                        <Redirect from="/" to="login" />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;