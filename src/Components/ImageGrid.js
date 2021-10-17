import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import NannyImage from './Image';

class NannyImageGrid extends React.Component {
    state = {
        images: [],
        selected: []
    }

    /**
     * @todo besser umsetzen (vorhandene bilder erst auslesen und damit iterieren anstelle der ziffern)
     */
     componentDidMount() {
        let images = [];

        for (let i = 0; i < 9; i++) {
            let image = {};

            image.index = i;
            image.path = `/tile00${i}.png`;
            image.name = `tile00${i}`;

            images.push(image);
        }

        this.setState({images: images});
    }

    toggleImage = (image) => {
        let selected = this.state.selected;

        if (selected.indexOf(image) !== -1)
            selected.splice(selected.indexOf(image), 1);
        else
            selected.push(image);

        this.setState({'selected': selected});
        this.props.click(selected);
    }

    render() {
        let style = {
            width: '300px'
        }

        return (
           <div style={style}>
                {this.state.images.map((image) => (
                    <NannyImage key={image.index} image={image} click={this.toggleImage} selected={this.state.selected} />
                ))}
            </div>
        );
    }
}
 
export default NannyImageGrid;