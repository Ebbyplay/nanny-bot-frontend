import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import App from './App';

import { AuthStore, CommonStore, ImageStore, RewardStore, TaskStore, UserStore } from './Stores';

const stores = {
    AuthStore,
    CommonStore,
    ImageStore,
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
