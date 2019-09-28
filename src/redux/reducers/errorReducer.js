import { IMAGES } from '../constants';
import { initialState } from '../store/initialState';

const errorReducer = (state = initialState.error, action) => {
    switch (action.type) {
        case IMAGES.LOAD_FAIL:
            return action.error;
        case IMAGES.LOAD:
            return state;
        case IMAGES.LOAD_SUCCESS:
            return null;
        default:
            return state;
    }
};

export default errorReducer;
