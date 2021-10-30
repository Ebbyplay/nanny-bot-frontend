import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

class Step2 extends Component {
    // TODO: Bilder Pin
    render() {
        return (
            <div>
                <p>Waehle einen Pin aus</p>
            </div>
        )
    }
}

export default inject('UserStore')(observer(Step2));
