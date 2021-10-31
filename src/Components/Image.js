import { Component, React } from 'react';
import Image from 'react-bootstrap/Image';

class NannyImage extends Component {
    render() {
        const image = this.props.image;

        let imageStyle= {
            height: '100px',
            width: '100px',
            border: this.props.selected.indexOf(image) !== -1 ? '2px dotted black' : ''
        };

        return (
            <Image 
                style={imageStyle} 
                src={this.props.image.path} 
                onClick={() => this.props.click(image)} 
                rounded 
            />
        )
    }
}
 
export default NannyImage;