import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import heroes from "../reducers/heroes";
import {configureStore} from "@reduxjs/toolkit";

const stringMiddleware = (store) => (dispatch) => (action) => {
    if (typeof action === 'string') {
        return dispatch({type: action})
    }
    return dispatch(action)
}


const store = configureStore({
    reducer: {heroes,},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
