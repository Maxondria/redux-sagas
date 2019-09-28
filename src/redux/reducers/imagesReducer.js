import { IMAGES } from '../constants';
import { initialState } from '../store/initialState';

const imageReducer = (state = initialState.images, action) => {
    if (action.type === IMAGES.LOAD_SUCCESS) {
        return [...state, ...action.images];
    }
    return state;
};

export default imageReducer;
