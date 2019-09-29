import { IMAGES, STATS } from '../constants';

const loadImages = () => ({
    type: IMAGES.LOAD,
});

const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images,
});

const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error,
});

const loadImageStats = () => ({
    type: STATS.LOAD,
});

const setImageStats = (id, downloads) => ({
    type: STATS.LOAD_SUCCESS,
    data: { id, downloads },
});

const setImageStatsError = id => ({
    type: STATS.LOAD_FAIL,
    id,
});

export {
    loadImages,
    setImages,
    setError,
    loadImageStats,
    setImageStats,
    setImageStatsError,
};
