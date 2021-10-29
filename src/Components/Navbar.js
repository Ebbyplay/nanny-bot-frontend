import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

class Navbar extends Component {
    render() {
        return (
            <p>NAVBAR</p>
        );
    }
}

export default inject('UserStore')(observer(Navbar));
