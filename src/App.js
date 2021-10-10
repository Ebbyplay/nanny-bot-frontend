import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import { HashRouter, Switch, Redirect, Link } from 'react-router-dom';
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
                    <Navbar expand="lg" bg="light" variant="light" sticky="top" collapseOnSelect>
                        <Container>
                            <Navbar.Brand>NannyBot</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                            <Navbar.Collapse id="responsive-navbar-nav">
                                
                                    {this.state.user ? (
                                        <>
                                            <Nav className="me-auto">
                                                <Nav.Link href="#" as={Link} to="/task" >Tasks</Nav.Link>
                                                <Nav.Link href="#" as={Link} to="/shop" >Shop</Nav.Link>
                                                {this.state.user.email ? <Nav.Link href="#" as={Link} to="/admin_rewards" >Belohnungen</Nav.Link> : <></>}
                                                <Nav.Link href="#" as={Link} to="/settings" >Einstellungen</Nav.Link>
                                            </Nav>

                                            <Nav className="justify-content-end">
                                                <Navbar.Text>
                                                    Angemeldet als: {this.state.user.name}
                                                </Navbar.Text>
                                                <Nav.Link onClick={this.handleLogout}>Abmelden</Nav.Link>
                                            </Nav>
                                        </>
                                    ) : (
                                        <Nav className="me-auto">
                                            <Nav.Link href="#" as={Link} to="/login" >Anmelden</Nav.Link>
                                            <Nav.Link href="#" as={Link} to="/signup" >Registrieren</Nav.Link>
                                        </Nav>
                                    )}
                            </Navbar.Collapse>
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