import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

import NannyImage from './Image';

class ImageGrid extends Component {
     componentDidMount() {
        this.props.ImageStore.load()
    }

    render() {
        return (
            this.props.ImageStore.map((image) => (
                <NannyImage key={image[1].uuid} image={image[1]} click={this.props.change} selected={this.props.selected} />
            ))
        )
    }
}
 
export default inject('ImageStore', 'UserStore')(observer(ImageGrid));;