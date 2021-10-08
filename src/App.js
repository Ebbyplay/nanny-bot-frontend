import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { PrivateRoute, PublicRoute } from './Utils/Routes';
import { getSessionStorage, unsetSessionStorage } from './Utils/Session';

import Home from './Views/Home';
import Dashboard from './Views/Dashboard';
import Tasks from './Views/Tasks';
import Shop from './Views/Shop';
import Login from './Views/Login';
import Signup from './Views/Signup';

class App extends React.Component {
    state = {
        user: null
    }

    componentDidMount() {
        let user = getSessionStorage('user');

        if (user) {
            this.setState({
                user: user
            });
        }
    }

    userchanged = (user) => {
        console.log('userChanged', user);

        this.setState({
            user: user
        });
    }

    /**
     * is triggered when the 'Abmelden' button is clicked
     * remove user from sessionStorage
     * redirect to 'login'
     * @param {*} e 
     */
    handleLogout = () => {
        unsetSessionStorage('user');
        this.setState({ user: null });
    }

    render() {
        let isLoggedIn = Boolean(this.state.user);

        return (
            <div className="App">
                <HashRouter>
                    <Navbar bg="light" variant="light">
                        <Container>
                            <Navbar.Brand>NannyBot</Navbar.Brand>
                            <Nav className="me-auto">
                                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                                {isLoggedIn ? (
                                    <>
                                        <NavLink activeClassName="active" to="/dashboard">Übersicht</NavLink>
                                        <NavLink activeClassName="active" to="/tasks">Tasks</NavLink>
                                        <NavLink activeClassName="active" to="/shop">Shop</NavLink>
                                        <NavLink activeClassName="active" to="/admin_rewards">Belohnungen</NavLink>

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
                        <Route exact user={this.state.user} path="/" component={Home} />
                        <PublicRoute user={this.state.user} userchanged={this.userchanged} path="/login" component={Login} />
                        <PublicRoute user={this.state.user} path="/signup" component={Signup} />
                        <PrivateRoute user={this.state.user} path="/dashboard" component={Dashboard} />
                        <PrivateRoute user={this.state.user} path="/tasks" component={Tasks} />
                        <PrivateRoute user={this.state.user} path="/shop" component={Shop} />
                        <PrivateRoute user={this.state.user} path="/admin_rewards" component={Admin_rewards} />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;