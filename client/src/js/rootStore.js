import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import rootReducer from './rootReducer.js';
import promiseMiddleware from 'redux-promise-middleware';
import {loadState, saveState} from './utils/LocalStorage';
import throttle from 'lodash/throttle'
const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootStore = createStore(rootReducer, persistedState,  composeEnhancers(applyMiddleware(promiseMiddleware())));

rootStore.subscribe(throttle(() => {
    saveState({
        guides: rootStore.getState().NavigationReducer.guides,
        location: rootStore.getState().NavigationReducer.location,
        city: rootStore.getState().NavigationReducer.cityLocation,

    });
}, 1000));

export default rootStore;