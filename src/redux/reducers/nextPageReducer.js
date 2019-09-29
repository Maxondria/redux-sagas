import { IMAGES } from '../constants';
import { initialState } from '../store/initialState';

const nextPageReducer = (state = initialState.nextPage, action) => {
    if (action.type === IMAGES.LOAD_SUCCESS) {
        return state + 1;
    } else {
        return state;
    }
};

export default nextPageReducer;
