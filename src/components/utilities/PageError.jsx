import React from 'react';

function PageError({ message }) {
	return (
		<div className="center red">
			<h1>{message}</h1>
		</div>
	);
}

export default PageError;
