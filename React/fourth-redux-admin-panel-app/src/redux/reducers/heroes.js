import {createReducer} from "@reduxjs/toolkit";

import {
    heroesFetched,
    heroesFetching,
    heroesFetchingError,
    heroDelete,
    heroDeleteError,
    addNewHero
} from "../actions";


const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

const heroes = createReducer(initialState, {
        [heroesFetched]: (state, action) => {
            console.log('hui')
            state.heroesLoadingStatus = 'idle';
            state.heroes = action.payload
        },
        [heroesFetching]: (state) => {
            state.heroesLoadingStatus = 'loading'
        },
        [heroesFetchingError]: state => {
            state.heroesLoadingStatus = 'error'
        },
        [heroDelete]: (state, action) => {
            state.heroes = state.heroes.filter(item => item.id !== action.payload)
        },
        [addNewHero]: (state, action) => {
            state.heroes = [...state.heroes, action.payload]
        }
    },
    [],
    state => state
)

// const heroes = createReducer(initialState, builder => {
//     builder
//         .addCase(heroesFetching, state => {
//             state.heroesLoadingStatus = 'loading'
//         })
//         .addCase(heroesFetched, (state, action)=>{
//             state.heroesLoadingStatus = 'idle';
//             state.heroes = action.payload
//         })
//         .addCase(heroesFetchingError, state => {
//             state.heroesLoadingStatus= 'error'
//         })
//         .addCase(heroDelete, (state, action) => {
//             state.heroes= state.heroes.filter(item => item.id !== action.payload)
//         })
//         .addCase(addNewHero, (state, action) => {
//                 ...state,
//                 state.heroes= [...state.heroes, action.payload],
//             })
// })
//
// const heroes = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HERO_ADD':
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload],
//             }
//         default:
//             return state
//     }
// }

export default heroes;
