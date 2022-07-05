import {createReducer} from "@reduxjs/toolkit";

import {
    clear,
    sparesAddCard, sparesDeleteCard, sparesEditCard, sparesSetDistance,
} from "../actions";

const initialState = {
    distance: [
        {
            value: 0,
            date: new Date(),
        },
    ],
    cardList: [
        {
            description: "1234",
            final: "1234",
            start: "1234",
            id: 0,
            title: "sv",
        },
    ],
    count: 1,
}

const spares = createReducer(initialState, {
        [clear]: (state, action) => {
            state.cardList = initialState.cardList
            state.count = initialState.count
            state.distance = initialState.distance
        },
        [sparesAddCard]: (state, action) => {
            state.cardList = [...state.cardList, {...action.payload, id: state.count}]
            state.count = state.count + 1
        },
        [sparesEditCard]: (state, action) => {
            state.cardList = state.cardList.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                } else {
                    return item
                }
            })
        },
        [sparesDeleteCard]: (state, action) => {
            state.cardList = state.cardList.filter((item) => item.id !== action.payload)
        },
        [sparesSetDistance]: (state, action) => {
            console.log(action.payload)
            console.log(state.distance)
            state.distance = [...state.distance, {
                value: action.payload > 999999 ? 999999 : action.payload,
                date: new Date()
            }]
        },

    },
    [],
    state => state
)

export default spares;
