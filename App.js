import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import AppReducer from './src/app.reducer';
import AppSaga from './src/app.saga';
import AppWithNavigationState from './src/app.navigator';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(AppReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(AppSaga);

console.disableYellowBox = true;

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}

