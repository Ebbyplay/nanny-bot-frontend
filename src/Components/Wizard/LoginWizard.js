import React from 'react';

import Step1 from './LoginStep1';
import Step2 from './LoginStep2';
import Step3 from './LoginStep3';

class LoginWizard extends React.Component {
    state = {
        currentStep: 1,
        email: '',
        password: '',
        mainAccount: null,
        selectedAccount: null
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
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
                        data={this.state}
                        handleChange={this.handleChange}
                        next={this.next}
                    />
                )
            case 2:
                return (
                    <Step2
                        data={this.state}
                        handleChange={this.handleChange}
                        next={this.next}
                        back={this.back}
                    />
                )
            case 3:
                return (
                    <Step3
                        data={this.state}
                        handleChange={this.handleChange}
                        next={this.next}
                        back={this.back}
                        userchanged={this.props.userchanged}
                    />
                )
            default:
                return (
                    <h1>Irgendwas ist schief gelaufen</h1>
                )
        }
    }
}

export default LoginWizard;