import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import { HashRouter, Switch, Redirect, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { PrivateRoute, PublicRoute } from './Utils/Routes';
import { getSessionStorage, setSessionStorage } from './Utils/Session';

import Tasks from './Views/Tasks';
import Shop from './Views/Shop';
import Login from './Views/Login';
import Logout from './Views/Logout';
import Signup from './Views/Signup';
import Settings from './Views/Settings';
import Admin_rewards from './Views/Admin_rewards';
import UserSelect from './Components/UserSelect';
import User_Tasks from './Views/User_Tasks';
import AdminUserRewards from './Views/AdminUserRewards';
import AdminUserTasks from './Views/AdminUserTasks';

class App extends React.Component {
    state = {
        userselect: false,
        user: getSessionStorage('user'),
        mainuser: getSessionStorage('mainuser'),
        subaccounts: getSessionStorage('subaccounts'),
        changetouser: null
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

    exitUserSelect = () => {
        this.setState({
            changetouser: null,
            userselect: true
        })
    }

    render() {
        return (
            <div className="App">
                <HashRouter>
                    <Navbar expand="lg" bg="light" variant="light" sticky="top" collapseOnSelect>
                        <Container>
                            <Navbar.Brand href="#" as={Link} to="/">NannyBot</Navbar.Brand>

                            {this.state.user && !this.state.userselect ? (
                                <Navbar.Brand onClick={this.exitUserSelect}>
                                    <img
                                        alt=""
                                        src={'/' + this.state.user.name}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    />
                                    {this.state.user.name}
                                </Navbar.Brand>
                            ) : (
                                <>
                                    {this.state.userselect ? (
                                        <UserSelect change={this.rootchangehandler} mainuser={this.state.mainuser} user={this.state.user} subaccounts={this.state.subaccounts} />
                                    ) : (
                                        <></>
                                    )}
                                </>
                            )}

                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                            <Navbar.Collapse id="responsive-navbar-nav">

                                {this.state.user ? (
                                    <>
                                        <Nav className="me-auto">
                                            {this.state.user.email ? <Nav.Link href="#" as={Link} to="/admin_rewards" >Belohnungen</Nav.Link> : <></>}
                                            <Nav.Link href="#" as={Link} to="/settings" >Einstellungen</Nav.Link>
                                        </Nav>

                                        {this.state.user.email ? (
                                            <Nav className="justify-content-end">
                                                <Nav.Link href="#" as={Link} to="/task" >Tasks</Nav.Link>
                                                <Nav.Link href="#" as={Link} to="/adminuser_tasks" >Aufgabenübersicht</Nav.Link>
                                                <Nav.Link href="#" as={Link} to="/adminuser_rewards" >Belohnungsübersicht</Nav.Link>
                                                <Nav.Link href="#" as={Link} to="/logout">Abmelden</Nav.Link>
                                            </Nav>
                                        ) : (
                                            <>
                                                <Nav className="me-auto">
                                                    <Nav.Link href="#" as={Link} to="/shop" >Shop</Nav.Link>
                                                    <Nav.Link href="#" as={Link} to="/user_tasks" >User_Tasks</Nav.Link>
                                                </Nav>
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <Nav className="me-auto">
                                        <Nav.Link href="#" as={Link} to="/login" >Anmelden</Nav.Link>
                                        <Nav.Link href="#" as={Link} to="/signup" >Registrieren</Nav.Link>
                                        {this.state.changetouser ? (<Nav.Link href="#" as={Link} to="/logout">Abmelden</Nav.Link>) : <></>}
                                    </Nav>
                                )}
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <Switch>
                        <PublicRoute user={this.state.user} path="/login" rootchangehandler={this.rootchangehandler} changetouser={this.state.changetouser} component={Login} />
                        <PublicRoute user={this.state.user} path="/signup" component={Signup} />
                        <PrivateRoute user={this.state.user} path="/tasks" subaccounts={this.state.subaccounts} component={Tasks} />
                        <PrivateRoute user={this.state.user} path="/adminuser_tasks" subaccounts={this.state.subaccounts} component={AdminUserTasks} />
                        <PrivateRoute user={this.state.user} path="/adminuser_rewards" subaccounts={this.state.subaccounts} component={AdminUserRewards} />
                        <PrivateRoute user={this.state.user} path="/user_tasks" component={User_Tasks} />
                        <PrivateRoute user={this.state.user} path="/shop" component={Shop} />
                        <PrivateRoute user={this.state.user} path="/settings" subaccounts={this.state.subaccounts} rootchangehandler={this.rootchangehandler} component={Settings} />
                        <PrivateRoute user={this.state.user} path="/admin_rewards" component={Admin_rewards} />
                        <PrivateRoute user={this.state.user} path="/logout" rootchangehandler={this.rootchangehandler} component={Logout} />
                        <Redirect from="/" to="login" />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;