import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

class Settings extends Component {
    render() {
        return (
            <p>Settings</p>
        )
    }
}

export default inject('UserStore')(observer(Settings));
