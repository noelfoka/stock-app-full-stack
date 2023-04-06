import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {persistor, store} from './StateManagement/store.js';
import {PersistGate} from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router> 
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Router>
    </Provider>
);


