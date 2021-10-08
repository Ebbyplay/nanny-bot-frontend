import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Image from 'react-bootstrap/Image';

class NannyAvatar extends React.Component {
    render() {
        return (
            <>
                <Image src="/logo192.png" rounded onClick={this.props.click} />
                {this.props.user.name}
            </>
        );
    }
}
 
export default NannyAvatar;