import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Button from 'react-bootstrap/Button';
import { signupMain } from '../../Utils/CallMaster';

import NannyImageGrid from '../ImageGrid';

class Step2 extends React.Component {
    state = {
        allImages: [],
        selectedImages: []
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

        this.setState({allImages: images});
    }

    /**
     * is triggered when selecting an image
     * @param {Object} image 
     */
     toggleImage = (image) => {
        let selectedImages = this.state.selectedImages;

        if (selectedImages.indexOf(image) !== -1)
            selectedImages.splice(selectedImages.indexOf(image), 1);
        else
            selectedImages.push(image);

        this.setState({'selectedImages': selectedImages});
    }

    /**
     * is triggered when clicking on the 'Registrieren' button
     */
     trySignup = () => {
        let selectedImages = this.state.selectedImages,
            { name, email, password, repassword } = this.props.data;

        if (selectedImages.length < 3)
            return alert('waehlen sie mindestens drei bilder aus!');

        /*let imgPassword = '';

        selectedImages.forEach((image) => {
            imgPassword += image.name;
        })*/

        signupMain(name, email, password, repassword)
        .then((res) => {
            let user = res.data;

            if (!user)
                return alert('anmeldung fehlgeschlagen!');

            this.props.rootchangehandler('user', user);
            this.history.push('/login');
        })
        
    }

    render() {
        return (
            <>
                <NannyImageGrid images={this.state.allImages} click={this.toggleImage} selected={this.state.selectedImages} />

                <Button variant="primary" onClick={this.props.back}>
                    Zurueck
                </Button>

                <Button variant="primary" onClick={this.trySignup}>
                    Registrieren
                </Button>
            </>
        )
    }
}

export default Step2;