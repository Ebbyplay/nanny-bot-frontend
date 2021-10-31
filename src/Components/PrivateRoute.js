import { Component, React} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

class PrivateRoute extends Component {
    render() {
        const { UserStore, ...props } = this.props;

        console.log('privateRoute', UserStore.currentUser)

        if (UserStore.currentUser)
            return <Route {...props} />;
        else 
            return <Redirect to="/login" />;
    }
}

export default inject('UserStore')(observer(PrivateRoute));
