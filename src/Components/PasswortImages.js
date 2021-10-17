import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Image from 'react-bootstrap/Image';

class PasswortImage extends React.Component {
    render() {
        let imageStyle= {
            height: '50px',
            width: '50px'
        };

        return (
            <div style={{display: 'flex'}}>
                <Image style={imageStyle} src={this.props.image.path} />
            </div>
        );
    }
}
 
export default PasswortImage;