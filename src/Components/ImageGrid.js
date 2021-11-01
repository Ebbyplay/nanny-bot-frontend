import { Component, React } from 'react';

import NannyImage from './Image';

class ImageGrid extends Component {
    render() {
        const { limitTo } = this.props;

        return (
            <div>
                {this.props.images.slice(0, limitTo).map((image) => (
                    <NannyImage key={image[1].uuid} image={image[1]} />
                ))}
            </div>
        )
    }
}
 
export default ImageGrid;