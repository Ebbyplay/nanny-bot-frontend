import React from 'react';

import Step1 from './SignupStep1';
import Step2 from './SignupStep2';

class SignupWizard extends React.Component {
    state = {
        currentStep: 1,
        name: '',
        email: '',
        password: '',
        repassword: ''
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
            default:
                return (
                    <h1>Irgendwas ist schief gelaufen</h1>
                )
        }
    }
}

export default SignupWizard;