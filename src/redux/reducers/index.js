import isLoading from './loadingReducer';
import images from './imagesReducer';
import error from './errorReducer';
import nextPage from './nextPageReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    images,
    isLoading,
    error,
    nextPage,
});

export default rootReducer;
