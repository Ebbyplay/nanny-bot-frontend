import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';

import List from '../Components/List';
import Loading from '../Components/Widgets/Loading';

class Tasks extends Component {
    componentDidMount() {
        this.props.TaskStore.load();
    }

    render() {
        const { tasks, isLoading } = this.props.TaskStore;

        if (isLoading)
            return <Loading />

        return <List elements={tasks} store={this.props.TaskStore} />
    }
}

export default inject('TaskStore', 'UserStore')(observer(Tasks));
