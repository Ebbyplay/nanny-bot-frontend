import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';
import ImageGrid from '../../ImageGrid';

class Step3 extends Component {
    state = {
        selectedImages: []
    }

    submit = () => {
        const user = this.props.UserStore.userInProcess;

        let imagePassword = 'TODO: aus selectedImages bauen';

        console.log('submit', user, imagePassword);

        /*this.props.AuthStore.secondLogin(user)
        .then(() => {
            // redirect auf dashboard
        })*/
    }

    handleChange = (image) => {
        let selectedImages = this.state.selectedImages;

        if (selectedImages.indexOf(image) === -1) {
            selectedImages.push(image);
        } else {
            selectedImages.splice(selectedImages.indexOf(image), 1);
        }

        this.setState({
            selectedImages: selectedImages
        });
    }

    // TOOD - Bilder-Pin anzeigen
    render() {
        return (
            <ImageGrid change={this.handleChange} selected={this.state.selectedImages} />
        )
    }
}

export default inject('AuthStore', 'UserStore')(observer(Step3));
