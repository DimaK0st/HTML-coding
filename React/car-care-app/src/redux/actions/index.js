import {createAction} from "@reduxjs/toolkit";

// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING',
//     }
// }
//       |
//      \ /

export const clear = createAction('CLEAR')

export const sparesAddCard = createAction('SPARES_ADD_CARD')

export const sparesEditCard = createAction('SPARES_EDIT_CARD')

export const sparesDeleteCard = createAction('SPARES_DELETE_CARD')

export const sparesSetDistance = createAction('SPARES_SET_DISTANCE')

export const authLogin = createAction('AUTH_LOGIN')

export const authRegister = createAction('AUTH_REGISTER')
