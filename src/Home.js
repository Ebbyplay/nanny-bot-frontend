import React from 'react';
import { getSessionStorage, unsetSessionStorage } from './Utils/Session';

/**
 * path: /
 */
class Home extends React.Component {
    state = {
        user: getSessionStorage('user')
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
        return (
            <>
                <form>
                    <input type="button" value='Abmelden' onClick={this.handleLogout} /><br />
                </form>
            </>
        );
    }
}

export default Home;