import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

class Step3 extends Component {
    state = {
        selectedImages: []
    }

    submit = () => {
        const user = this.props.UserStore.userInProcess;

        let imagePassword = 'TODO: aus selectedImages bauen';

        console.log('submit', user, imagePassword);

        /*this.props.AuthStore.secondLogin(user)
        .catch((err) => {
            // fehlermeldung - bilder pin falsch
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
            <p>step 3</p>
        )
    }
}

export default inject('AuthStore', 'UserStore')(observer(Step3));
