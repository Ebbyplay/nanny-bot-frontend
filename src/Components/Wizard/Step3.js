import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

class Step3 extends Component {
    handleSubmit = () => {
        const user = this.props.UserStore.userInProcess;

        this.props.AuthStore.secondLogin(user)
        .catch((err) => {
            // fehlermeldung - bilder pin falsch
        })
    }

    render() {
        return (
            <p>step 3</p>
        )
    }
}

export default inject('AuthStore', 'UserStore')(observer(Step3));
