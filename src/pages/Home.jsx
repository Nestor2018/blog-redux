import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from '../components/Menu';
import Users from '../components/users';
import Publications from '../components/publications';

class Home extends Component {
	render() {
		const Works = () => <div>Tarea</div>;
		return (
			<BrowserRouter>
				<Menu />
				<div className="margin">
					<Route exact path="/" component={Users} />
					<Route exact path="/tareas" component={Works} />
					<Route exact path="/publicaciones/:key" component={Publications} />
				</div>
			</BrowserRouter>
		);
	}
}

export default Home;
