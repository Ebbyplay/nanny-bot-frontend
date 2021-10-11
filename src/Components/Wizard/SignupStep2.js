import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Button from 'react-bootstrap/Button';
import { signupMain } from '../../Utils/CallMaster';

import NannyImageGrid from '../ImageGrid';

class Step2 extends React.Component {
    state = {
        selectedImages: []
    }

    /**
     * is triggered when selecting an image
     * @param {Object} image 
     */
     toggleImage = (images) => {
        this.setState({
            selectedImages: images
        })
    }

    /**
     * TODO: ueberarbeiten zwecks imgPassword
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