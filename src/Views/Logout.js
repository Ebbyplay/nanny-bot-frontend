import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
    componentDidMount() {
        this.props.UserStore.unsetCurrentUser();
        this.props.UserStore.unsetUserInProcess();
    }

    render() {
        return <Redirect to="/login" />;
    }
}

export default inject('UserStore')(observer(Logout));
