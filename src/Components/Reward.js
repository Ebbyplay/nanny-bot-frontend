import React from "react";

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class Reward extends React.Component {


    render() {
        const reward = this.props.reward;

        const container = {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 20px",
        }

        const contents = {

        }

        const image = {

        }

        const costs = {

        }

        return (

            <Accordion defaultActiveKey="1">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <div style={container} >
                            <div style={contents}>
                                <div style={contents}>
                                    {reward.name}
                                </div>
                                <div style={costs}>
                                    Kostet: {reward.cost} Coins
                                </div>
                            </div>
                            <div style={image}>
                                {reward.imagePath}
                                <img src="/favicon.ico" />
                            </div>
                        </div>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>



        )
    }
}

export default Reward;