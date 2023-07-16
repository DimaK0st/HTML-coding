const initialState = {
    activeFilter: 'all',
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus: 'idle'
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'FILTER_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading'

            }
        case 'FILTER_FETCHED':
            return {
                ...state,
                tempHeroes: state.heroes,
                filters: action.payload,
                filtersLoadingStatus: 'idle',

            }
        case 'FILTER_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'loading'

            }
        case 'HERO_DELETE':
            return {
                ...state,
                heroes: state.heroes.filter(item => item.id !== action.payload),
            }
        case 'HERO_ADD':
            return {
                ...state,
                heroes: [...state.heroes, action.payload],
            }
        case 'FILTER_HEROES':
            return {
                ...state,
                activeFilter: action.payload,
            }

        default:
            return state
    }
}

export default reducer;
