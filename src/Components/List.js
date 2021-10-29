import { Component, React } from 'react';

import ListItem from './ListItem';
import Loading from './Widgets/Loading';

class List extends Component {
    render() {
        const { elements, loading } = this.props;

        if (loading)
            return <Loading />

        return (
            elements.map((element) => (
                <ListItem key={element[1].uuid} element={element[1]} />
            ))
        )
    }
}

export default List;
