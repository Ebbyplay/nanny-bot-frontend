import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

class Rewards extends Component {
    render() {
        return (
            <p>Rewards</p>
        );
    }
}

export default inject('RewardStore', 'UserStore')(observer(Rewards));
