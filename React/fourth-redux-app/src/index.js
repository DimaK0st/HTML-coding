import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createStore} from "redux";
import reducer from "./redux/reducer";
import {Provider} from "react-redux";
import App from "./components/App";


const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args))
// }

// const incDispatch = bindActionCreators(inc, dispatch)
// const decDispatch = bindActionCreators(dec, dispatch)
// const rndDispatch = bindActionCreators(rnd, dispatch)

// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators({
//     incDispatch: inc,
//     decDispatch: dec,
//     rndDispatch: rnd,
// }, dispatch)

//
// document.getElementById('inc').addEventListener('click', inc)
// document.getElementById('dec').addEventListener('click', dec)
// document.getElementById('rnd').addEventListener('click', rnd)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

