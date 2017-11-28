import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(rootReducer, composeWithDevTools(
        applyMiddleware(thunk)));
}