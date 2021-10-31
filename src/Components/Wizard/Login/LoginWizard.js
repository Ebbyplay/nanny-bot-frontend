import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

class LoginWizard extends Component {
    state = {
        currentStep: 1
    }

    componentDidMount() {
        const { currentUser, userInProcess } = this.props.UserStore;

        console.log('loginWizard mount', currentUser, userInProcess)
    
        if (currentUser)
            this.props.history.push('/tasks');

        if (userInProcess)
            this.setState({currentStep: 2})
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

export default inject('UserStore')(observer(LoginWizard));
