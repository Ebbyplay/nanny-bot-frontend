import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Button from 'react-bootstrap/Button';

import { login } from '../../Utils/CallMaster';
import NannyImageGrid from '../ImageGrid';

class Step3 extends React.Component {
    state = {
        selectedImages: []
    }

    /**
     * is triggered when selecting an image
     * @param {Object} image 
     */
     toggleImage = (images) => {
        this.setState({
            selectedImage: images
        })
    }

    /**
     * TODO: ueberarbeiten zwecks imgPassword
     * is triggered when clicking on the 'Anmelden' button
     */
    submitImagePassword = () => {
        let selectedImages = this.state.selectedImages,
            selectedAccount = this.props.data.selectedAccount;

        if (selectedImages.length < 3)
            return alert('waehlen sie mindestens drei bilder aus!');

        let imgPassword = '';

        selectedImages.forEach((image) => {
            imgPassword += image.name;
        })

        login(selectedAccount.email, imgPassword, selectedAccount.parentId)
        .then((res) => {
            let user = res.data;

            if (!user)
                return alert('anmelden fehlgeschlagen - ueberpruefen sie ihre anmeldedaten');

                this.props.rootchangehandler('user', user);
                this.props.rootchangehandler('subaccounts', this.props.data.subaccounts);
            })
        
    }

    render() {
        return (
            <>
                <NannyImageGrid click={this.toggleImage} />

                <Button variant="primary" onClick={this.submitImagePassword}>
                    Anmelden
                </Button>

                <Button variant="primary" onClick={this.props.back}>
                    Zurueck
                </Button>
            </>
        )
    }
}

export default Step3;