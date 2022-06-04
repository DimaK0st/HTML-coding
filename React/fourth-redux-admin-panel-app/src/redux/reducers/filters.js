const initialState = {
    activeFilter: 'all',
    filters: [],
    filtersLoadingStatus: 'idle'
}

const filters = (state = initialState, action) => {
    switch (action.type) {
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
        case 'FILTER_HEROES':
            return {
                ...state,
                activeFilter: action.payload,
            }

        default:
            return state
    }
}

export default filters;
