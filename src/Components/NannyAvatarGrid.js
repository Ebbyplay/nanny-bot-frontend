import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import NannyAvatar from './NannyAvatar';

class NannyAvatarGrid extends React.Component {
    render() {
        let style = {
            width: '300px',
            display: 'flex'
        }

        return (
            <>
                <div style={style}>
                    {this.props.users.map((user) => (
                        <NannyAvatar key={user.id} user={user} click={this.click} />
                    ))}
                </div>
            </>
        );
    }
}

export default NannyAvatarGrid;