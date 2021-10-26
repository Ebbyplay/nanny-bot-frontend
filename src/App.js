import { Component, React } from 'react';
import { Route, Switch } from "react-router-dom";

import Login from './Views/Login';

class App extends Component {
    render() {
        return (
            <div>
                <p>App</p>
                <Switch>
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        );
    }
}

export default App;