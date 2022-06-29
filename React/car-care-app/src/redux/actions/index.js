import {createAction} from "@reduxjs/toolkit";

// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING',
//     }
// }
//       |
//      \ /

export const heroesFetching = createAction('HEROES_FETCHING')

export const sparesAddCard = createAction('SPARES_ADD_CARD')

export const sparesEditCard = createAction('SPARES_EDIT_CARD')


