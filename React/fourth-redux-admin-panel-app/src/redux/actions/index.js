import {createAction} from "@reduxjs/toolkit/src/createAction";

// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING',
//     }
// }
//       |
//      \ /

export const heroesFetching = createAction('HEROES_FETCHING')

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes,
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR',
    }
}

// export const heroDelete = (id) => {
//     return {
//         type: 'HERO_DELETE',
//         payload: id,
//     }
// }
//           |
//          \ /

export const heroDelete = createAction('HERO_DELETE')

export const addNewHero = (data) => {
    return {
        type: 'HERO_ADD',
        payload: data,
    }
}

export const heroDeleteError = () => {
    return {
        type: 'HERO_DELETE_ERROR',
    }
}

export const filtersFetching = () => {
    return {
        type: 'FILTER_FETCHING',
    }
}

export const filtersFetched = (heroes) => {
    return {
        type: 'FILTER_FETCHED',
        payload: heroes,
    }
}

export const filtersFetchingError = () => {
    return {
        type: 'FILTER_FETCHING_ERROR',
    }
}

export const filtersHeroes = (filter) => {
    return {
        type: 'FILTER_HEROES',
        payload: filter,
    }
}
