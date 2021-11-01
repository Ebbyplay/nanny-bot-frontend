import { Component, React } from 'react';

import Image from 'react-bootstrap/Image';

class NannyImage extends Component {
    render() {
        const image = this.props.image;

        let imageStyle= {
            height: '100px',
            width: '100px',
            border: image.isSelected ? 'dotted 1px black' : ''
        };

        return (
            <Image 
                style={imageStyle} 
                src={image.path + image.name} 
                onClick={() => {image.toggle()}} 
                rounded 
            />
        )
    }
}
 
export default NannyImage;