import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

import UserSelect from '../../UserSelect';

class Step2 extends Component {
    componentDidMount() {
        const { userInProcess } = this.props.UserStore;
        console.log('step 2', userInProcess)
        
        // TODO: users holen
        // this.props.UserStore.load(userInProcess);
    }

    select(user) {
        this.props.UserStore.setUserInProcess(user);
        this.props.next();
    }

    render() {
        const { users } = this.props.UserStore;

        return (
            <div>
                <p>Waehle einen Benutzer aus</p>
                <UserSelect users={users} />
            </div>
        )
    }
}

export default inject('UserStore')(observer(Step2));
