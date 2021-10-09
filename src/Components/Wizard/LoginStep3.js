import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Button from 'react-bootstrap/Button';

import { login } from '../../Utils/CallMaster';
import NannyImage from '../NannyImage';

class Step3 extends React.Component {
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
                <div>
                    {this.state.allImages.map((image, index) => (
                        <NannyImage key={image.index} image={image} click={this.toggleImage} selected={this.state.selectedImages} />
                    ))}
                </div>

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