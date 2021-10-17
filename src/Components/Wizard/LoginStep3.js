import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Button from 'react-bootstrap/Button';

import { login } from '../../Utils/CallMaster';
import NannyImageGrid from '../ImageGrid';
import PasswortGrid from '../PasswortGrid';

class Step3 extends React.Component {
    state = {
        selectedImages: []
    }

    /**
     * is triggered when selecting an image
     * @param {Array} images
     */
     toggleImage = (images) => {
        this.setState({
            selectedImages: images
        })
    }

    /**
     * TODO: ueberarbeiten zwecks imgPassword
     * is triggered when clicking on the 'Anmelden' button
     */
    submitImagePassword = () => {
        let selectedImages = this.state.selectedImages,
            selectedAccount = this.props.data.selectedAccount,
            parentAccount = this.props.data.user;

        if (selectedImages.length < 3)
            return alert('waehlen sie mindestens drei bilder aus!');

        let imgPassword = '';

        selectedImages.forEach((image) => {
            imgPassword += image.name;
        })

        login(selectedAccount.name, selectedAccount.email ? selectedAccount.email : null, imgPassword, selectedAccount.email ? null : parentAccount.id)
        .then((res) => {
            let user = res.data;

            if (!user)
                return alert('anmelden fehlgeschlagen - ueberpruefen sie ihre anmeldedaten');

            this.props.rootchangehandler('user', user);
        })
    }

    render() {
        return (
            <>
                <NannyImageGrid click={this.toggleImage} />
                <PasswortGrid images={this.state.selectedImages} />

                <Button variant="primary" onClick={this.submitImagePassword}>
                    Anmelden
                </Button>

                {this.props.data.mainaccount ? (
                    <></>
                ) : (
                    <Button variant="primary" onClick={this.props.back}>
                        Zurück
                    </Button>
                )}
                
            </>
        )
    }
}

export default Step3;