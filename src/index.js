import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux Reducers below, used for holding different feedback info

const userFeeling = (state = 0, action) => {
    if (action.type === 'UPDATE_FEELING') {
        return state = action.payload;
    }
    return state;
}

const userUnderstanding = (state = 0, action) => {
    if (action.type === 'UPDATE_UNDERSTANDING') {
        return state = action.payload;
    }
    return state;
}

const userSupport = (state = 0, action) => {
    if (action.type === 'UPDATE_SUPPORT') {
        return state = action.payload;
    }
    return state;
}

const userComment = (state = '', action) => {
    if (action.type === 'UPDATE_COMMENT') {
        return state = action.payload;
    }
    return state;
}


const reduxStore = createStore(
    combineReducers({
        userFeeling,
        userUnderstanding,
        userSupport,
        userComment
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
