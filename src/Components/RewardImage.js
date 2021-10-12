import React from 'react'

class RewardImage extends React.Component {
    render() {
        return (
            <div className="col-md-4 mb-2 px-1">
                <div className={`card p-1 ${this.props.selected ? "border-success" : ""}`}>
                    <img src={this.props.path} alt={this.props.path} id={this.props.imageId} onClick={() => this.props.handleSelectImage(this.props.imageId)} />
                </div>
            </div>
        )
    }
}
export default RewardImage