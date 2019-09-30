import { IMAGES } from '../constants';
import { take, fork, put, call } from 'redux-saga/effects';
import { fetchImageStats } from '../../api';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';

const statsWorkerSaga = function*(id) {
    try {
        yield put(loadImageStats(id));
        const stats = yield call(fetchImageStats,id);
        console.log('stats');
        yield put(setImageStats(id, stats.downloads.total));

        //exit the loop if all completed well
        return true;
    } catch (e) {
        yield setImageStatsError(id);
    }
};

const statsWatcherSaga = function*() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);

        for (let i = 0; i < images.length; i++) {
            /**
             * Just works like call() but it is non-blocking
             * Unlike call(), fork() wont suspend the generator
             */
            yield fork(statsWorkerSaga, images[i].id);
        }
    }
};

export default statsWatcherSaga;
