import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

class Step3 extends Component {
    render() {
        return (
            <p>step 3</p>
        )
    }
}

export default inject('UserStore')(observer(Step3));
