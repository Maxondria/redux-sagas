import { IMAGES } from '../constants';
import { initialState } from '../store/initialState';

const loadingReducer = (state = initialState.isLoading, action) => {
    switch (action.type) {
        case IMAGES.LOAD:
            return true;
        case IMAGES.LOAD_SUCCESS:
            return false;
        case IMAGES.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

export default loadingReducer;
