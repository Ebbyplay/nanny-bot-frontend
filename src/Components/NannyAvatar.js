import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Image from 'react-bootstrap/Image';

class NannyAvatar extends React.Component {
    render() {
        return (
            <>
                <div>
                    <Image src="/logo192.png" rounded onClick={this.props.click} />
                    <p>{this.props.user.name}</p>
                </div>
            </>
        );
    }
}
 
export default NannyAvatar;