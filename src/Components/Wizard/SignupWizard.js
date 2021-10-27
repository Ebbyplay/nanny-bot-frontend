import { Component, React } from 'react';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

class SignupWizard extends Component {
    state = {
        currentStep: 1
    }

    next = () => {
        this.setState({currentStep: this.state.currentStep + 1})
    }

    back = () => {
        this.setState({currentStep: this.state.currentStep - 1})
    }

    render() {
        switch (this.state.currentStep) {
            case 1:
                return (
                    <Step1
                        next={this.next}
                    />
                )
            case 2:
                return (
                    <Step2
                        next={this.next}
                        back={this.back}
                    />
                )
            case 3:
                return (
                    <Step3
                        next={this.next}
                        back={this.back}
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
