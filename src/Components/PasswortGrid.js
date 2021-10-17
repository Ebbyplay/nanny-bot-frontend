import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import PasswortImage from './PasswortImages';

class PasswortGrid extends React.Component {
    render() {
        return (
            <div>
                {this.props.images.map((image) => (
                    <PasswortImage key={image.index} image={image} />
                ))}
            </div>
        );
    }
}
 
export default PasswortGrid;