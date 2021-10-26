import { Component, React } from 'react';
import { Route, Switch } from "react-router-dom";

import { Login, Logout, Rewards, Settings, Tasks } from './Views/';
import PrivateRoute from './Components/PrivateRoute';

class App extends Component {
    render() {
        return (
            <div>
                <p>App</p>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={Logout} />
                    <PrivateRoute path="tasks" component={Tasks} />
                    <PrivateRoute path="rewards" component={Rewards} />
                    <PrivateRoute path="settings" component={Settings} />
                </Switch>
            </div>
        );
    }
}

export default App;