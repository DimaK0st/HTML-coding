import {createReducer} from "@reduxjs/toolkit";



const initialState = {
    user:{

    },
    auth:false
}

const authentication = createReducer(initialState, {


    },
    [],
    state => state
)

export default authentication