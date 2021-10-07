import React from 'react';

class Task extends React.Component {
    state = {
        clicked: true
    }

    onClick = (e) => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        let taskStyle = {};

        if (this.state.clicked) {
            taskStyle.display = 'none';
        }

        return (
            <div>
                <span onClick={this.onClick}>{this.props.task.name}</span>
                <span>{this.props.task.weight}</span>

                <div style={taskStyle}>
                    <span>{this.props.task.description}</span>
                </div>
            </div>
        )
    }
}

export default Task;