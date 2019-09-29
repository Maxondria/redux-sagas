import isLoading from './loadingReducer';
import images from './imagesReducer';
import error from './errorReducer';
import nextPage from './nextPageReducer';
import stats from './statsReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    images,
    isLoading,
    error,
    nextPage,
    stats,
});

export default rootReducer;
