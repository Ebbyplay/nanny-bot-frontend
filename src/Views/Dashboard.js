import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Redirect } from 'react-router-dom';

/**
 * path: /dashboard
 */
class Dashboard extends React.Component {
    state = {
        subAccounts: []
    }

    render() {
        if (!this.props.user)
            return <Redirect to='/dashboard' />

        return (
            <>
                <p>todo: dashboard</p>
            </>
        );
    }
}

export default Dashboard;