import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Image from 'react-bootstrap/Image';

class NannyAvatar extends React.Component {
    render() {
        return (
            <>
                <div style={this.props.imageStyle}>
                    <Image src={'/' + this.props.user.imagePath} rounded onClick={this.props.click} />
                    <p>{this.props.user.name}</p>
                </div>
            </>
        );
    }
}
 
export default NannyAvatar;