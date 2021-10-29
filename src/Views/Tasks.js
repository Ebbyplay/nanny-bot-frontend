import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

import List from '../Components/List';

class Tasks extends Component {
    componentDidMount() {
        const { TaskStore } = this.props;
        TaskStore.load();
    }

    render() {
        // const { currentUser } = this.props.UserStore;
        const { tasks, isLoading } = this.props.TaskStore;

        if (isLoading)
            return <p>1</p>

        return (
            <List elements={tasks} loading={isLoading} />
        );
    }
}

export default inject('TaskStore', 'UserStore')(observer(Tasks));
