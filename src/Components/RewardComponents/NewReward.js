import React from "react";
import ImageSelector from "../ImageSelector";
import { Container } from 'react-bootstrap';
import { FaRegSave } from 'react-icons/fa';
import { IoReturnUpBack } from 'react-icons/io5';

class NewReward extends React.Component {
    state = {
        title: '',
        cost: 0
    }

    /**
     * is triggered when typing in input fields
     * @param {*} e 
     */
     onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Container fluid>
                <div className="row mb-3">
                    <div className="col-6">
                        <button className="btn btn-sm btn-warning" onClick={this.props.handleBackButton}><IoReturnUpBack className="pb-1" /> Zurück</button>
                    </div>

                    <div className="col-6 text-end">
                        <button className="btn btn-sm btn-success" name={this.props.rewardId} onClick={() => this.props.create(this.state.title, this.state.cost)}><FaRegSave className="pb-1" />Speichern</button>
                    </div>
                </div>
                <div>
                    <label htmlFor="title">Titel</label>
                    <input type="text" className="form-control" name="title" onChange={this.onChange} value={this.state.title} />
                    <label htmlFor="cost">Punkte</label>
                    <input type="number" className="form-control w-25" name="cost" min="0" onChange={this.onChange} value={this.state.cost} />
                    <ImageSelector />
                </div>
            </Container>
        )
    }
}

export default NewReward;