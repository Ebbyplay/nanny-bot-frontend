import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

import List from '../Components/List';
import Loading from '../Components/Widgets/Loading';

class Rewards extends Component {
    componentDidMount() {
        this.props.RewardStore.load();
    }

    render() {
        const { currentUser } = this.props.UserStore;
        const { rewards, isLoading } = this.props.RewardStore;

        if (isLoading)
            return <Loading />

        return <List elements={rewards} store={this.props.RewardStore} user={currentUser} />
    }
}

export default inject('RewardStore', 'UserStore')(observer(Rewards));
