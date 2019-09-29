import { STATS } from '../constants';
import { initialState } from '../store/initialState';

const statsReducer = (state = initialState.stats, action) => {
    switch (action.type) {
        case STATS.LOAD:
            return {
                ...state,
                [action.data.id]: {
                    isLoading: true,
                    downloads: null,
                    error: false,
                },
            };
        case STATS.LOAD_SUCCESS:
            return {
                ...state,
                [action.data.id]: {
                    isLoading: false,
                    downloads: action.data.downloads,
                    error: false,
                },
            };
        case STATS.LOAD_FAIL:
            return {
                ...state,
                [action.data.id]: {
                    isLoading: false,
                    downloads: null,
                    error: true,
                },
            };
        default:
            return state;
    }
};

export default statsReducer;
