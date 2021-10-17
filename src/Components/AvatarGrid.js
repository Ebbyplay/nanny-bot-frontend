import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import NannyAvatar from './Avatar';

class NannyAvatarGrid extends React.Component {
    render() {
        let style = {
            display: 'flex'
        }

        return (
            <div style={style}>
                {this.props.users.map((user) => (
                    <NannyAvatar imageStyle={this.props.imageStyle} key={user.id} user={user} click={() => this.props.click(user)} />
                ))}
            </div>
        );
    }
}

export default NannyAvatarGrid;