import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

class NannyImage extends React.Component {
    render() {
        let imageStyle= {
            height: '100px',
            width: '100px',
            backgroundColor: this.props.selectedImages.indexOf(this.props.image) !== -1 ? 'green' : 'red'
        };

        return (
            <>
                <Container>
                    <Row>
                        <Col xs={6} md={4} onClick={this.props.click}>
                            <Image 
                                style={imageStyle} 
                                src={this.props.image.path} 
                                onClick={() => this.props.toggleImage(this.props.image)} 
                                rounded 
                            />
                            {this.props.image.index}
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
 
export default NannyImage;