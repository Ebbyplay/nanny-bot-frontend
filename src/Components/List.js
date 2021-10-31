import { Component, React } from 'react';
import { Button } from 'react-bootstrap';

import EditTask from './EditTask';
import EditReward from './EditReward';
import ListItem from './ListItem';

import TaskModel from '../Models/TaskModel';
import RewardModel from '../Models/RewardModel';

class List extends Component {
    state = {
        editView: false,
        element: null
    }

    back = () => {
        this.setState({
            editView: false
        });
    }

    edit = (element) => {
        let storeName = this.props.store.constructor.name,
            copy = null;

        switch(storeName) {
            case 'RewardStore':
                copy = new RewardModel(this.props.store);
                break;
            case 'TaskStore':
                copy = new TaskModel(this.props.store);
                break;
            default: {
                return;
            }
        }

        copy.init(element);

        this.setState({
            editView: true,
            element: copy
        });
    }

    submit = (element) => {
        element.repetition = element.repetition.value;

        console.log('submit', element);

        // TODO: Kommentar entfernen, wenn alles passt
        /*element.save()
        .then(() => {
            this.setState({
                editView: false,
                element: null
            });
        })*/
    }

    render() {
        const { elements, user } = this.props;
        const { editView, element } = this.state;

        if (editView) {
            switch(element.constructor.name) {
                case 'TaskModel':
                    return <EditTask submit={this.submit} back={this.back} task={element} />
                case 'RewardModel':
                    return <EditReward submit={this.submit} back={this.back} reward={element} />
                default:
                    this.back();
            }
        }

        return (
            <div>
                {elements.map((element) => (
                    <ListItem key={element[1].uuid} element={element[1]} edit={this.edit} user={user} />
                ))}

                <Button variant="primary" onClick={() => {this.edit(null)}}>Add</Button>
            </div>
        )
    }
}

export default List;
