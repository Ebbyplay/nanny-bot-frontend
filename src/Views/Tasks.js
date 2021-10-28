import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

import List from '../Components/List';

class Tasks extends Component {
    render() {
        // const { currentUser } = this.props.UserStore;
        const { tasks, isLoading } = this.props.TaskStore;

        console.log(tasks)

        return (
            <List elements={tasks} loading={isLoading} />
        );
    }
}

export default inject('TaskStore', 'UserStore')(observer(Tasks));
