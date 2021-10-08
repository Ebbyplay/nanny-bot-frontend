import React from "react";

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { getReward } from "../Utils/CallMaster";

class Reward extends React.Component {
    state = {
        reward: {},
    }

    buy = (name) => {
        this.props.buyReward(name)
    }

    componentDidMount() {
        getReward(this.props.user_reward.rewardId)
            .then((reward) => {
                this.setState({ reward: reward.data })
                console.log("REWARD", this.state.reward)
            })
            .catch((err) => {
                console.log('could not get reward ', err);
            })
    }

    render() {
        const user_reward = this.props.user_reward;

        const card = {
            padding: "10px 10px",
        }

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
            <Accordion defaultActiveKey="1" style={card}>
                <Card >
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <div style={container} >
                            <div style={contents}>
                                <div style={contents}>
                                    {this.state.reward.name}
                                </div>
                                <div style={costs}>
                                    Kostet: {this.state.reward.cost} Coins
                                </div>
                            </div>
                            <div style={image}>
                                {this.state.reward.imagePath}
                                <img src="/favicon.ico" />
                            </div>
                        </div>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div>
                                Coins nach dem Kauf: {this.state.reward.cost}
                            </div>
                            <input type="Button" defaultValue="Kaufen" onClick={() => this.buy(user_reward.id)} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion >
        )
    }
}

export default Reward;