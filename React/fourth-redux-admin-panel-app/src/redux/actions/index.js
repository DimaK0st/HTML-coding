import {createAction} from "@reduxjs/toolkit";

// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING',
//     }
// }
//       |
//      \ /

export const heroesFetching = createAction('HEROES_FETCHING')

export const heroesFetched = createAction('HEROES_FETCHED')

export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR')
// export const heroDelete = (id) => {
//     return {
//         type: 'HERO_DELETE',
//         payload: id,
//     }
// }
//           |
//          \ /

export const heroDelete = createAction('HERO_DELETE')

export const addNewHero = createAction('HERO_ADD')

export const heroDeleteError = createAction('HERO_DELETE_ERROR')

export const filtersFetching = createAction('FILTER_FETCHING')

export const filtersFetched = createAction('FILTER_FETCHED')

export const filtersFetchingError = createAction('FILTER_FETCHING_ERROR')

export const filtersHeroes = createAction('FILTER_HEROES')
