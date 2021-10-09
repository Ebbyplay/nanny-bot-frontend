import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Image from 'react-bootstrap/Image';

class NannyImage extends React.Component {
    render() {
        let imageStyle= {
            height: '100px',
            width: '100px',
            border: this.props.selected.indexOf(this.props.image) !== -1 ? '2px dotted black' : ''
        };

        return (
            <>
                <Image 
                    style={imageStyle} 
                    src={this.props.image.path} 
                    onClick={() => this.props.click(this.props.image)} 
                    rounded 
                />
            </>
        );
    }
}
 
export default NannyImage;