import {createReducer} from "@reduxjs/toolkit";

import {
    clear,
    sparesAddCard, sparesDeleteCard, sparesEditCard,
} from "../actions";

const initialState = {
    cardList: [
        {
            description: "1234",
            final: "1234",
            start: "1234",
            id: 0,
            title: "sv",
        }
    ],
    count: 1,
}

const spares = createReducer(initialState, {
        // [heroesFetched]: (state, action) => {
        //     console.log('hui')
        //     state.heroesLoadingStatus = 'idle';
        //     state.heroes = action.payload
        // },
        [clear]: (state, action) => {
            state.cardList=initialState.cardList
            state.count=initialState.count
        },
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
        [sparesDeleteCard]: (state, action) => {
            state.cardList = state.cardList.
            filter((item)=>item.id !== action.payload)
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
