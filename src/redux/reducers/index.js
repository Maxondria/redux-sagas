import isLoading from './loadingReducer';
import images from './imagesReducer';
import error from './errorReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    images,
    isLoading,
    error,
});

export default rootReducer;
