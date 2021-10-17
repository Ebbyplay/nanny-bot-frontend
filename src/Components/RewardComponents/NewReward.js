import React from "react";
import ImageSelector from "./ImageSelector";
import { Container } from 'react-bootstrap';
import { FaRegSave } from 'react-icons/fa';
import { IoReturnUpBack } from 'react-icons/io5';

class NewReward extends React.Component {
    render() {
        return (
            <Container fluid>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-5 mx-auto">
                        <div className="row mb-3">
                            <div className="col-6">
                                <button className="btn btn-sm btn-warning" onClick={this.props.handleBackButton}><IoReturnUpBack className="pb-1" /> Zurück</button>
                            </div>

                            <div className="col-6 text-end">
                                <button className="btn btn-sm btn-success" name={this.props.rewardId} onClick={this.props.handleSaveReward}><FaRegSave className="pb-1" />Speichern</button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="title">Titel</label>
                            <input type="text" className="form-control" name="title" onChange={this.props.onChange} value={this.props.state.title} />
                            <label htmlFor="cost">Punkte</label>
                            <input type="number" className="form-control w-25 mb-3" name="cost" min="0" onChange={this.props.onChange} value={this.props.state.cost} />
                            <ImageSelector />
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default NewReward;