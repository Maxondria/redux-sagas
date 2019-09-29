import { takeEvery, select, call, put } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImages } from '../../api';
import { setError, setImages } from '../actions';

const getPage = state => state.nextPage;

/**
 *
 * @optional param action(type and payload
 * @returns a dispatchEvent
 */
const imageWorkerSaga = function*() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (e) {
        yield put(setError(e.toString()));
    }
};

const imagesWatcherSaga = function*() {
    yield takeEvery(IMAGES.LOAD, imageWorkerSaga);
};

export default imagesWatcherSaga;
