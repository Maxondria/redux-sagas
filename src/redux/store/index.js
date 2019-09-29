import { applyMiddleware, compose, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import rootReducer from '../reducers';
import rootSaga from '../sagas/rootSaga';
import createSagaMiddleware from 'redux-saga';

export default function configureStore(initialState) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //redux dev tools

    // create the saga middleware
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(sagaMiddleware, reduxImmutableStateInvariant()),
        ),
    );

    //run the saga
    sagaMiddleware.run(rootSaga);

    return store;
}
