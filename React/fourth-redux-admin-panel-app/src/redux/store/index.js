import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import filters from "../reducers/filters";
import heroes from "../reducers/heroes";
import ReduxThunk from 'redux-thunk'

const stringMiddleware = (store) => (dispatch) => (action) => {
    if (typeof action === 'string') {
        return dispatch({type: action})
    }
    return dispatch(action)
}

const enhancer = (createStore) => (...args) => {
    const store = createStore(...args)

    const oldDispatch = store.dispatch
    store.dispatch = (action) => {
        if (typeof action === 'string') {
            return oldDispatch({type: action})
        }
        return oldDispatch(action)
    }
    return store
}

const reducer = combineReducers({heroes, filters})

const store = createStore(
    reducer,
    compose(
        applyMiddleware(ReduxThunk,stringMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

export default store;
