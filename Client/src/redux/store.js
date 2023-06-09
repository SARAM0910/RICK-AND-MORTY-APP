import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk';
const composeEnhancher = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

 export const store=createStore(
    rootReducer,
    composeEnhancher(applyMiddleware(thunkMiddleware))
)


