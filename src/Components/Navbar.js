import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

class Navbar extends Component {
    componentDidMount() {
        let { RewardStore, TaskStore, UserStore } = this.props;

        if (UserStore.currentUser && UserStore.currentUser.id) {   
            TaskStore.loadTasks();
            RewardStore.loadRewards();
        }
    }

    render() {
        return (
            <p>NAVBAR</p>
        );
    }
}

export default inject('RewardStore', 'TaskStore', 'UserStore')(observer(Navbar));
