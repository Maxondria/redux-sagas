import { all } from 'redux-saga/effects';
import imagesWatcherSaga from './imagesWatcherSaga';
import statsWatcherSaga from './statsWatcherSaga';

//root saga
const rootSaga = function*() {
    yield all([imagesWatcherSaga(), statsWatcherSaga()]);
};

export default rootSaga;
