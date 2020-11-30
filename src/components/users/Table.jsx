import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableBody from './TableBody';

class Table extends Component {
	render() {
		return (
			<div>
				<table className="table">
					<thead>
						<tr>
							<th>Nombress</th>
							<th>Correo</th>
							<th>Enlace</th>
						</tr>
					</thead>
					<tbody>
						{this.props.users.map((user) => <TableBody user={user} key={user.id} />)}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (reducers) => {
	return reducers.usersReducer;
};

export default connect(mapStateToProps)(Table);
