import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

import UserSelect from '../../UserSelect';
import Loading from '../../Widgets/Loading';

class Step2 extends Component {
    componentDidMount() {
        // this.props.UserStore.load();
    }

    select = (user) => {
        this.props.UserStore.setUser('userInProcess', user.uuid);
        this.props.next();
    }

    render() {
        const { /*users,*/ isLoading } = this.props.UserStore;

        let users = [
            {uuid: '123', name: 'user1'},
            {uuid: '132', name: 'user2'},
            {uuid: '213', name: 'user3'},
            {uuid: '231', name: 'user4'}
        ];

        if (isLoading)
            return <Loading />

        return (
            <div>
                <p>Waehle einen Benutzer aus</p>
                <UserSelect users={users} select={this.select} />
            </div>
        )
    }
}

export default inject('UserStore')(observer(Step2));
