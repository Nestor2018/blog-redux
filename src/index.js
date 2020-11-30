import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import Home from './pages/Home';
import './styles/index.sass';
import reducers from './reducers';

const store = createStore(
	reducers, //todos los reducers
	{}, //estado inicial
	applyMiddleware(reduxThunk)
);

render(
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById('app')
);
