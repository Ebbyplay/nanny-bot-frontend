import React from 'react';
import { Redirect } from 'react-router-dom';
import { getSessionStorage, unsetSessionStorage } from '../Utils/Session';
import NannyAvatar from '../Components/NannyAvatar';

/**
 * path: /dashboard
 */
class Dashboard extends React.Component {
    state = {
        user: getSessionStorage('user'),
        subuser: []
    }

    /**
     * is triggered when the 'Abmelden' button is clicked
     * remove user from sessionStorage
     * redirect to 'login'
     * @param {*} e 
     */
     handleLogout = (e) => {
        unsetSessionStorage('user');
        this.props.history.push('/login');
    }

    render() {
        if (!this.state.user)
            return <Redirect to='/dashboard' />

        return (
            <>
                <form>
                    <input type="button" value='Abmelden' onClick={this.handleLogout} /><br />
                </form>

                <strong>Benutzer auswählen</strong>

                <ul>
                    <div key={this.state.user.id}>
                        <NannyAvatar user={this.state.user} />
                    </div>

                    {this.state.subuser.map(subuser => (
                        <NannyAvatar key={subuser.id} user={subuser} />
                    ))}
                </ul>
            </>
        );
    }
}

export default Dashboard;