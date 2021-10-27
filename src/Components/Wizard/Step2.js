import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

class Step2 extends Component {
    render() {
        return (
            <p>step 2</p>
        )
    }
}

export default inject('UserStore')(observer(Step2));
