import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

import List from '../Components/List';

class Rewards extends Component {
    render() {
        // const { currentUser } = this.props.UserStore;
        const { rewards, isLoading } = this.props.RewardStore;

        return (
            <List elements={rewards} loading={isLoading} />
        );
    }
}

export default inject('RewardStore', 'UserStore')(observer(Rewards));
