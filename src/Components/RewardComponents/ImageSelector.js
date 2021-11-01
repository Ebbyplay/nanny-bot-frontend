import React from 'react'
import RewardImage from './RewardImage'
class ImageSelector extends React.Component {
    state = {
        rewardImages: [
            {
                'imageId': 0,
                'path': './tile022.png',
                'selected': false
            }, {
                'imageId': 1,
                'path': './tile009.png',
                'selected': false
            }, {
                'imageId': 2,
                'path': './tile028.png',
                'selected': false
            }, {
                'imageId': 3,
                'path': './tile011.png',
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
            <div className="row">
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