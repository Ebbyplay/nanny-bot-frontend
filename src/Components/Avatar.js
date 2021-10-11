import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Image from 'react-bootstrap/Image';

class NannyAvatar extends React.Component {
    render() {
        let imageStyle= {
            height: '100px',
            width: '100px'
        };

        return (
            <>
                <div>
                    <Image style={imageStyle} src="/logo192.png" rounded onClick={this.props.click} />
                    <p>{this.props.user.name}</p>
                </div>
            </>
        );
    }
}
 
export default NannyAvatar;