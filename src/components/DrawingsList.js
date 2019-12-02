import React, { useState } from 'react';

const DrawingsList = props => {
	const [name, setName] = useState('');
	const saveDrawing = () => {
		props.saveList(name);
		setName('');
	};

	return (
		<div className="list">
			<h5>Drawings</h5>
			<ul>
				{props.list.map(name => (
					<li>{name}</li>
				))}
			</ul>
			<input
				type="text"
				placeholder="Drawing Name"
				value={name}
				onChange={event => setName(event.target.value)}
				required
			/>
			<button onClick={saveDrawing}>Save</button>
		</div>
	);
};

export default DrawingsList;
