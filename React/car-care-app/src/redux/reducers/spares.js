import {createReducer} from "@reduxjs/toolkit";

import {
    heroesFetching, sparesAddCard,
} from "../actions";

const initialState = {
    cardList: [],
    count: 'temp',
}

const spares = createReducer(initialState, {
        // [heroesFetched]: (state, action) => {
        //     console.log('hui')
        //     state.heroesLoadingStatus = 'idle';
        //     state.heroes = action.payload
        // },
        [sparesAddCard]: (state,action) => {
            state.cardList = [...state.cardList, {...action.payload}]
        },
        // [heroesFetchingError]: state => {
        //     state.heroesLoadingStatus = 'error'
        // },
        // [heroDelete]: (state, action) => {
        //     state.heroes = state.heroes.filter(item => item.id !== action.payload)
        // },
        // [addNewHero]: (state, action) => {
        //     state.cardList = [...state.heroes, action.payload]
        // }
    },
    [],
    state => state
)

export default spares;
