import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Button from 'react-bootstrap/Button';

import { getAllSubAccounts } from '../../Utils/CallMaster';
import NannyAvatarGrid from '../AvatarGrid';

class Step2 extends React.Component {
    state = {
        allAccounts: []
    }

    componentDidMount() {
        getAllSubAccounts(this.props.data.user.id)
        .then((res) => {
            let subAccounts = res.data;

            if (!subAccounts)
                return;

            this.setState({
                allAccounts: subAccounts.concat(this.props.data.user)
            });

            this.props.rootchangehandler('subaccounts', subAccounts);
        })
    }

    /**
     * is triggered when clicking on an avatar
     * @param {Object} user 
     */
    selectUser = (user) => {
        // TODO: entfernen, wenn das mit dem imagePasswort funktioniert
        this.props.rootchangehandler('user', user);

        this.props.data.selectedAccount = user;
        this.props.next();
    }

    render() {
        let style = {
            width: '120px',
            height: '120px'
        };
        
        return (
            <>
                <h3>Benutzer auswählen:</h3>
                <NannyAvatarGrid users={this.state.allAccounts} click={this.selectUser} imageStyle={style} />

                <Button variant="primary" onClick={this.props.back}>
                    Zurück
                </Button>
            </>
        )
    }
}

export default Step2;