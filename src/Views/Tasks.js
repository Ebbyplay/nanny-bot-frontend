import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

class Tasks extends Component {
    componentDidMount() {
        console.log(this.props.TaskStore.tasks)
    }

    render() {
        return (
            <p>Tasks</p>
        );
    }
}

export default inject('TaskStore', 'UserStore')(observer(Tasks));
