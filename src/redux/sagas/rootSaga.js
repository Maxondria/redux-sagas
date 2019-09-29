import { all } from 'redux-saga/effects';
import imagesWatcherSaga from './imagesWatcherSaga';

//root saga
const rootSaga = function*() {
    yield all([imagesWatcherSaga()]);
};

export default rootSaga;
