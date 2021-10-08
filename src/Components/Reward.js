import React from "react";

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { getReward } from "../Utils/CallMaster";
import ReactCanvasConfetti from 'react-canvas-confetti';

class Reward extends React.Component {
    getInstance = (instance) => {
        this.confetti = instance;
    };

    state = {
        reward: {},
        disabled: false,
    }

    disableReward = () => {
        this.setState({ disabled: true })
    }

    fire = () => {
        this.confetti();
    }

    buy = () => {
        if (this.state.disabled)
            return;
        this.disableReward()
        this.confetti().then(() => {
            this.props.buyReward(this.props.user_reward.id, this.state.reward.cost)
        });

    }

    componentDidMount() {
        getReward(this.props.user_reward.rewardId)
            .then((reward) => {
                this.setState({ reward: reward.data })
            })
            .catch((err) => {
                console.log('could not get reward ', err);
            })
    }

    render() {
        const user_reward = this.props.user_reward;
        const canAfford = this.state.reward.cost <= this.props.points;
        const allreadyClaimed = user_reward.claimedAt != null;

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

        const h2 = {
            color: "orangered",
        }

        const canvasStyles = {
            position: 'fixed',
            pointerEvents: 'none',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 999
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
                            <div className={canAfford && !allreadyClaimed ? "" : "hide"}>
                                <div>
                                    Coins nach dem Kauf: {this.props.points - this.state.reward.cost}
                                </div>
                                <input type="Button" defaultValue="Kaufen" onClick={() => this.buy()} />
                                <ReactCanvasConfetti refConfetti={this.getInstance} style={canvasStyles} />
                            </div>
                            <div style={h2} className={!canAfford && !allreadyClaimed ? "" : "hide"}>
                                <h2>Diese Belohnung kannst Du dir noch nicht leisten.</h2>
                            </div>
                            <div style={h2} className={allreadyClaimed ? "" : "hide"}>
                                <h2>Diese Belohnung hast du schon abgeholt.</h2>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion >
        )
    }
}

export default Reward;