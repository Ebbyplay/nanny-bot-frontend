import { Component, React } from 'react';

import ListItem from './ListItem';
import Loading from '../Components/Loading';

class List extends Component {
    render() {
        const { elements, loading } = this.props;
        
        if (loading)
            return <Loading />

        return (
            elements.map((element) => (
                <ListItem key={element.uuid} element={element} />
            ))
        )
    }
}

export default List;
