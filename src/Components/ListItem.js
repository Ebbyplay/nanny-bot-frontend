import { Component, React } from 'react';
import { Accordion, Card } from 'react-bootstrap';

class ListItem extends Component {
    render() {
        const { element } = this.props;

        return (
            <Accordion defaultActiveKey="1">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <ul style={{ listStyleType: 'none' }}>
                            <li style={{ display: 'inline-block', float: 'left' }}>{element.name}</li>
                            <li style={{ display: 'inline-block', float: 'right' }}>{element.weight}</li>
                        </ul>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {element.description}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}

export default ListItem;
