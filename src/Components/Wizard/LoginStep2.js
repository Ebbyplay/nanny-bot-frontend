import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Button from 'react-bootstrap/Button';

import NannyAvatar from '../NannyAvatar';
import { getAllSubAccounts } from '../../Utils/CallMaster';


class Step2 extends React.Component {
    state = {
        allAccounts: []
    }

    componentDidMount() {
        getAllSubAccounts(this.props.data.mainAccount.id)
        .then((res) => {
            let subAccounts = res.data;

            if (!subAccounts)
                return;

            this.setState({
                allAccounts: subAccounts.concat(this.props.data.mainAccount)
            })
        })
    }

    /**
     * is triggered when clicking on an avatar
     * @param {Object} user 
     */
    selectUser = (user) => {
        console.log('selectUser', {user: user, t: this});

        this.props.data.selectedAccount = user;
        this.props.next();
    }

    render() {
        return (
            <>
                <h3>Benutzer auswählen:</h3>

                <div>
                    {this.state.allAccounts.map((user) => (
                        <NannyAvatar key={user.id} user={user} click={this.selectUser} />
                    ))}
                </div>

                <Button variant="primary" onClick={this.props.back}>
                    Zurueck
                </Button>
            </>
        )
    }
}

export default Step2;