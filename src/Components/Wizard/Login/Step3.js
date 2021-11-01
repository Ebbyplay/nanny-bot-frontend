import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

import { Button } from 'react-bootstrap';
import ImageGrid from '../../ImageGrid';
import Loading from '../../Widgets/Loading';
import Error from '../../Widgets/Error';

class Step3 extends Component {
    componentDidMount() {
        this.props.ImageStore.init();
    }

    submit = () => {
        const { /*history, AuthStore,*/ ImageStore, UserStore } = this.props;
        const user = UserStore.userInProcess;
        const selectedImages = ImageStore.selectedImages;

        let imagePassword = '';

        selectedImages.forEach((image) => {
            imagePassword += image[1].uuid
        });

        console.log('TODO: submit', {user:user, images:selectedImages, password:imagePassword});

        /*AuthStore.secondLogin(user)
        .then(() => {
            // redirect auf dashboard - ausgewaehlte bilder unsetten
            // history.push('/dashboard)
            // ImageStore.unselectAll();
        })*/
    }

    render() {
        const { images, errors, isLoading } = this.props.ImageStore;

        if (isLoading)
            return <Loading />

        return (
            <div>
                <Error errors={errors} />
                <ImageGrid images={images} />
                <Button variant="primary" onClick={this.submit}>
                    Anmelden
                </Button>
            </div>
        )
    }
}

export default inject('AuthStore', 'ImageStore', 'UserStore')(observer(Step3));
