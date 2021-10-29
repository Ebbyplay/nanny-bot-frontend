import { Component, React } from 'react';
import { Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';

import { Login, Logout, Rewards, Settings, Tasks } from './Views/';
import PrivateRoute from './Components/PrivateRoute';
import Header from './Components/Header';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Container>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <PrivateRoute path="/tasks" component={Tasks} />
                        <PrivateRoute path="/rewards" component={Rewards} />
                        <PrivateRoute path="/settings" component={Settings} />
                    </Switch>
                </Container>
            </>
        );
    }
}

export default App;