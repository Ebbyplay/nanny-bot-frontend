import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

class Header extends Component {
    render() {
        // const { currentUser } = this.props.UserStore;

        return (
            <footer>
                <p>Nannybot&trade;</p>
            </footer>
        );
    }
}

export default inject('UserStore')(observer(Header));
