import { Component, React } from 'react';

import Step1 from './Step1';

class SignupWizard extends Component {
    state = {
        currentStep: 1
    }

    next = () => {
        this.setState({currentStep: this.state.currentStep + 1});
    }

    back = () => {
        this.setState({currentStep: this.state.currentStep - 1});
    }

    render() {
        switch (this.state.currentStep) {
            case 1:
                return (
                    <Step1
                        next={this.next}
                    />
                )
            default:
                return (
                    <h1>🤔</h1>
                )
        }
    }
}

export default SignupWizard;
