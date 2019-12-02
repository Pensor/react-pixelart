import React, { useState } from 'react';
import Pixel from './Pixel';
import Colors from '../Colors';

const Canvas = props => {
	const [matrix, setMatrix] = useState(
		JSON.parse(window.localStorage.getItem('matrix'))
	);

	const changeColor = (rowIndex, colIndex) => {
		const newMatrix = matrix.slice();
		newMatrix[rowIndex][colIndex] = props.currentColor;
		setMatrix(newMatrix);
		window.localStorage.setItem('matrix', JSON.stringify(newMatrix));
	};

	return (
		<div className={'canvas'}>
			{matrix.map((row, rowIndex) =>
				row.map((_, colIndex) => {
					return (
						<Pixel
							key={`${rowIndex}-${colIndex}`}
							background={Colors[matrix[rowIndex][colIndex]]}
							onClick={e => changeColor(rowIndex, colIndex)}
						/>
					);
				})
			)}
		</div>
	);
};

export default Canvas;
