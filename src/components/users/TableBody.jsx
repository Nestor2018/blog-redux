import React from 'react';
import { Link } from 'react-router-dom';

import Eye from '../utilities/Eye';

function TableBody({ user }) {
	return (
		<tr key={user.id}>
			<td>{user.name}</td>
			<td>{user.email}</td>
			<td>{user.website}</td>
			<td>
				<Link to={`/publicaciones/${user.id}`}>
					<Eye />
				</Link>
			</td>
		</tr>
	);
}

export default TableBody;
