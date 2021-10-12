import React from 'react'
import RewardImage from './RewardImage'
class ImageSelector extends React.Component {
    state = {
        basedir: 'asd',
        rewardImages: [
            {
                'imageId': 0,
                'path': this.basedir + '/image0.png',
                'selected': false
            }, {
                'imageId': 1,
                'path': this.basedir + '/image1.png',
                'selected': false
            }, {
                'imageId': 2,
                'path': this.basedir + '/image2.png',
                'selected': false
            }, {
                'imageId': 3,
                'path': this.basedir + '/image3.png',
                'selected': false
            }]
    }
    handleSelectImage = (id) => {
        this.setState(prevState => {
            return {
                rewardImages: prevState.rewardImages.map(image => {
                    if (image.imageId === id) {
                        return {
                            ...image,
                            selected: true
                        }
                    } else {
                        return {
                            ...image,
                            selected: false
                        }
                    }
                }),
            }
        })
    }

    render() {
        return (
            <div className="row px-2">
                {this.state.rewardImages.map((image) => (
                    <RewardImage
                        key={image.imageId}
                        imageId={image.imageId}
                        path={image.path}
                        selected={image.selected}
                        handleSelectImage={this.handleSelectImage}
                    />
                ))
                }
            </div >
        )
    }
}
export default ImageSelector