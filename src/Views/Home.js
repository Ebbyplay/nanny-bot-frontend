import React from 'react';
import { getSessionStorage } from '../Utils/Session';

/**
 * path: /
 */
class Home extends React.Component {
    state = {
        user: getSessionStorage('user')
    }

    render() {
        return (
            <>
                <p>todo: home view</p>
            </>
        );
    }
}

export default Home;