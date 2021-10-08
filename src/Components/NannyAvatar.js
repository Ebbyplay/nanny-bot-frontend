import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

class NannyAvatar extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col xs={6} md={4} onClick={this.props.click}>
                            <Image src="/logo192.png" rounded />
                            {this.props.user.name}
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
 
export default NannyAvatar;