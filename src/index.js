import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import App from './App';

import { AuthStore, UserStore, TaskStore, RewardStore, CommonStore } from './Stores';

const stores = {
    AuthStore,
    CommonStore,
    RewardStore,
    TaskStore,
    UserStore
};

ReactDOM.render(
    <Provider {...stores}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
