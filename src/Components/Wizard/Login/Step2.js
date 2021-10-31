import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

import UserSelect from '../../UserSelect';
import Loading from '../../Widgets/Loading';

class Step2 extends Component {
    componentDidMount() {
        // this.props.UserStore.load();
    }

    select(user) {
        this.props.UserStore.setUser('userInProcess', user.uuid);
        this.props.next();
    }

    render() {
        const { users, isLoading } = this.props.UserStore;

        if (isLoading)
            return <Loading />

        return (
            <div>
                <p>Waehle einen Benutzer aus</p>
                <UserSelect users={users} />
            </div>
        )
    }
}

export default inject('UserStore')(observer(Step2));
