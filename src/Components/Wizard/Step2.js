import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router';

class Step2 extends Component {
    render() {
        // redirect ausbauen, wenn alle steps wieder eingebaut sind
        const { currentUser } = this.props.UserStore;

        if (currentUser && currentUser.id)
            return <Redirect to="/tasks" />

        return (
            <p>step 2</p>
        )
    }
}

export default inject('UserStore')(observer(Step2));
