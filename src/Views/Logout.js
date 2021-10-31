import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
    componentDidMount() {
        this.props.AuthStore.logout();
    }

    render() {
        return <Redirect to="/login" />;
    }
}

export default inject('AuthStore')(observer(Logout));
