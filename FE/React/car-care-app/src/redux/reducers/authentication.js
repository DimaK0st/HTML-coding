import {createReducer} from "@reduxjs/toolkit";
import {authLogin, authRegister} from "../actions";


const initialState = {
    users: [
        {
            login: 'test',
            password: 'test',
        }
    ],
    auth: false
}

const authentication = createReducer(initialState, {
        [authRegister]: (state, action) => {
            state.users = [...state.users, {login: action.payload.login, password: action.payload.password}]
        },
        [authLogin]: (state) => {
            state.auth = true
        }

    },
    [],
    state => state
)

export default authentication