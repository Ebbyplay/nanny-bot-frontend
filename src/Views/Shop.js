import React from 'react';
import { getSessionStorage } from '../Utils/Session';

/**
 * path: /shop
 */
class Shop extends React.Component {
    state = {
        user: getSessionStorage('user')
    }

    render() {
        return (
            <>
                <p>todo: shop view</p>
            </>
        );
    }
}

export default Shop;