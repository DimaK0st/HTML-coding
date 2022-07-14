import {createReducer} from "@reduxjs/toolkit";

import {
    sparesAddCard, sparesAddOption, sparesDeleteCard, sparesEditCard, sparesSetDistance,
} from "../actions";
import {options} from "./constOptions";

const initialState = {
    distance: [
        {
            value: 0,
            date: new Date(),
        },
    ],
    cardList: [
        {
            description: "Test Description",
            final: "6",
            start: "1",
            id: 0,
            title: "10",
        },
        {
            description: "Test Description Test Description Test Description Test Description",
            final: "4",
            start: "3",
            id: 1,
            title: "12",
        },
        {
            description: "Test Description Test Description Test Description Test Description",
            final: "3",
            start: "2",
            id: 2,
            title: "13",
        },
    ],
    options: [...options],
    countСard: 3,
    countOption: 73,
}

const spares = createReducer(initialState, {
        [sparesAddCard]: (state, action) => {
            state.cardList = [...state.cardList, {...action.payload, id: state.countСard}]
            state.countСard = state.countСard + 1
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
            state.distance = [...state.distance, {
                value: action.payload > 999999 ? 999999 : action.payload,
                date: new Date()
            }]
        },
        [sparesAddOption]: (state, action) => {
            state.options = [...state.options, {
                name: action.payload,
                value: state.countOption
            }]
            state.countOption = state.countOption + 1
        },

    },
    [],
    state => state
)

export default spares;
