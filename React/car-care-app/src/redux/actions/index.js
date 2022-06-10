import {createAction} from "@reduxjs/toolkit";

// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING',
//     }
// }
//       |
//      \ /

export const heroesFetching = createAction('HEROES_FETCHING')
