import React from 'react';
import { getSessionStorage } from './Utils/Session';
import NannyAvatar from './Components/NannyAvatar';

/**
 * path: /dashboard
 */
class Dashboard extends React.Component {
    state = {
        user: getSessionStorage('user')
    }

  render() {
    return (
        <>
            <strong>Benutzer auswählen</strong>
            <ul>
                <div key={this.state.user.id}>
                    <NannyAvatar user={this.state.user}></NannyAvatar>
                </div>

                {this.state.user.subaccounts.map(subaccount => (
                    <div key={subaccount.id}>
                        <NannyAvatar user={subaccount}></NannyAvatar>
                    </div>
                ))}
            </ul>
        </>
    );
  }
}

export default Dashboard;