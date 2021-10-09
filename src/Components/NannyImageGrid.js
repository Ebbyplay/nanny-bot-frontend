import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import NannyImage from './NannyImage';

class NannyImageGrid extends React.Component {
    render() {
        let style = {
            width: '300px'
        }

        return (
            <>
                <div style={style}>
                    {this.props.images.map((image, index) => (
                        <NannyImage key={image.index} image={image} click={this.props.click} selected={this.props.selected} />
                    ))}
                </div>
            </>
        );
    }
}
 
export default NannyImageGrid;