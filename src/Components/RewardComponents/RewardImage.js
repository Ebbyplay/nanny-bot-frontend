import React from 'react'

class RewardImage extends React.Component {
    render() {
        return (
            <div className="col-6 col-sm-3">
                <div className={`card ${this.props.selected ? "border-success" : ""}`}>
                    < img src={this.props.path} alt={this.props.path} id={this.props.imageId} onClick={() => this.props.handleSelectImage(this.props.imageId)
                    } />
                </div >
            </div >
        )
    }
}
export default RewardImage