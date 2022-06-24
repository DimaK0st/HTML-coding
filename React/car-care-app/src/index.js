import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import {Provider} from "react-redux";
import store from './redux/store';
import {CookiesProvider} from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <CookiesProvider>
              <App/>
          </CookiesProvider>
      </Provider>
  </React.StrictMode>
);
