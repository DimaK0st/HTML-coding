import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import {Provider} from "react-redux";
// import {store, persistor} from './redux/store';
import {Cookies, CookiesProvider} from "react-cookie";
import { PersistGate } from 'redux-persist/integration/react'
import store from "./redux/store";
import {persistStore} from "redux-persist";

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <CookiesProvider>
                    <App/>
                </CookiesProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
