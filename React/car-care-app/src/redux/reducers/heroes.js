import {createReducer} from "@reduxjs/toolkit";

import {
    heroesFetching,
} from "../actions";

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

const carsСonsumables = createReducer(initialState, {
        // [heroesFetched]: (state, action) => {
        //     console.log('hui')
        //     state.heroesLoadingStatus = 'idle';
        //     state.heroes = action.payload
        // },
        [heroesFetching]: (state) => {
            state.heroesLoadingStatus = 'loading'
        },
        // [heroesFetchingError]: state => {
        //     state.heroesLoadingStatus = 'error'
        // },
        // [heroDelete]: (state, action) => {
        //     state.heroes = state.heroes.filter(item => item.id !== action.payload)
        // },
        // [addNewHero]: (state, action) => {
        //     state.heroes = [...state.heroes, action.payload]
        // }
    },
    [],
    state => state
)

export default carsСonsumables;
