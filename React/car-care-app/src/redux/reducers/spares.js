import {createReducer} from "@reduxjs/toolkit";

import {
    sparesAddCard, sparesEditCard,
} from "../actions";

const initialState = {
    cardList: [
        {
            Description: "1234",
            Final: "1234",
            Start: "1234",
            id: 0,
            option: "sv",
        }
    ],
    count: 0,
}

const spares = createReducer(initialState, {
        // [heroesFetched]: (state, action) => {
        //     console.log('hui')
        //     state.heroesLoadingStatus = 'idle';
        //     state.heroes = action.payload
        // },
        [sparesAddCard]: (state, action) => {
            state.cardList = [...state.cardList, {...action.payload, id: state.count}]
            state.count = state.count + 1
        },
        [sparesEditCard]: (state, action) => {
            state.cardList = state.cardList.map((item)=>{
                if(item.id === action.payload.id){
                    return action.payload
                }
                else {
                    return item
                }
            })
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
