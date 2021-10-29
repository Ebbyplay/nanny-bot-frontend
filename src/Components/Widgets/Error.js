import { Component, React } from 'react';

class Error extends Component {
    render() {
        const { error } = this.props

        return (
            <p>{error}</p>
        )
    }
}

export default Error;
