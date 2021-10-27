import { Component, React} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

class PrivateRoute extends Component {
    render() {
        const { UserStore, ...props } = this.props;

        if (UserStore.currentUser && UserStore.currentUser.id)
            return <Route {...props} />;
        else 
            return <Redirect to="/login" />;
    }
}

export default inject('UserStore')(observer(PrivateRoute));
