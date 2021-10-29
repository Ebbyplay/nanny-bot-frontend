import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

class Step2 extends Component {
    componentDidMount() {
        // TODO: alle users holen
        const { userInProcess } = this.props.UserStore;

        console.log('step 2', userInProcess)
    }

    selectUser(user) {
        this.props.UserStore.setUserInProcess(user);
        this.props.next();
    }

    // TODO - alle users anzeigen - netflix user select
    render() {
        return (
            <p>step 2</p>
        )
    }
}

export default inject('UserStore')(observer(Step2));
