import { Component, React } from 'react';

class ListItem extends Component {
    // TODO: update state, view muss sich aktualisieren  (╯°□°）╯︵ ┻━┻
    handleClick(element) {
        element.setDescription('test');
        // element.save();
    }



    render() {
        const { element } = this.props;

        // console.log('ListItem', element);

        return (
            <>
                <p onClick={() => this.handleClick(element) }>{element.name}</p>
                <p>{element.description}</p>
            </>
        )
    }
}

export default ListItem;
