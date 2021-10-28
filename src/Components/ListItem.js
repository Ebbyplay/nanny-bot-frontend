import { Component, React } from 'react';

class ListItem extends Component {
    render() {
        const { element } = this.props;

        console.log('ListItem', element);

        return (
            <p>Item</p>
        )
    }
}

export default ListItem;
