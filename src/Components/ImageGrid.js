import { Component, React } from 'react';

import NannyImage from './Image';

class ImageGrid extends Component {
    render() {
        return (
            <div>
                {this.props.images.slice(0, 9).map((image) => (
                    <NannyImage key={image[1].uuid} image={image[1]} />
                ))}
            </div>
        )
    }
}
 
export default ImageGrid;