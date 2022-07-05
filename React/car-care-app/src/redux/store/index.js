import {combineReducers} from 'redux';
import {configureStore} from "@reduxjs/toolkit";
import spares from "../reducers/spares";
import storage from 'redux-persist/lib/storage'
import {persistReducer} from "redux-persist";
import authentication from "../reducers/authentication"; // defaults to localStorage for web and AsyncStorage for react-native

const stringMiddleware = (store) => (dispatch) => (action) => {
    if (typeof action === 'string') {
        return dispatch({type: action})
    }
    return dispatch(action)
}

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({spares, authentication})


const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
    serializableCheck: false
})

export default store;
