import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

import List from '../Components/List';

class Tasks extends Component {
    render() {
        const { tasks, isLoading } = this.props.TaskStore;

        return (
            <List elements={tasks} loading={isLoading} />
        );
    }
}

export default inject('TaskStore', 'UserStore')(observer(Tasks));
