import React from 'react';

/**
 * avatar
 */
class NannyAvatar extends React.Component {
    state = {
        user: this.props.user
    }

    selectUser = (user) => {
        console.log('selectuser', user);
    }

    render() {
        return (
            <>
                <div onClick={() => this.selectUser(this.state.user)}>
                    <strong>{this.state.user.name}</strong>
                </div>
            </>
        );
    }
}
 
export default NannyAvatar;