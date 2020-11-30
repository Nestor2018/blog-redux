import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';
import Spiner from '../utilities/Spiner';
import PageError from '../utilities/PageError';
import Table from './table';

class Users extends Component {
	componentDidMount() {
		if(!this.props.users.length){
			this.props.getUsers();
		}
	}

	putContent = () => {
		if (this.props.loading) {
			return <Spiner />;
		}
		if (this.props.error) {
			return <PageError message={this.props.error} />;
		}
		return <Table />;
	};

	render() {
		return (
			<div>
				<h1>Usurios</h1>
				{this.putContent()}
			</div>
		);
	}
}

const mapStateToProps = (reducers) => {
	return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
