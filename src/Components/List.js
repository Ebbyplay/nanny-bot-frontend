import { Component, React } from 'react';

class List extends Component {
    render() {
        const { elements, loading } = this.props;

        console.log('List', {elements: elements, loading: loading});

        return (
            <p>TODO</p>
        )
    }
}

export default List;
