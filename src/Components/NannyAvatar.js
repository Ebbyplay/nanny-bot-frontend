import React from 'react';

/**
 * avatar
 */
class NannyAvatar extends React.Component {
    state = {
        user: this.props.user
    }

    render() {
        return (
            <>
                <strong>{this.state.user.name}</strong>
                <br />
            </>
        );
    }
}
 
export default NannyAvatar;