import React, { useState } from 'react';
import Pixel from './Pixel';
import Colors from '../Colors';

const Canvas = props => {
	const changeColor = (rowIndex, colIndex) => {
		props.changeColor(rowIndex, colIndex);
	};

	return (
		<div className={'canvas'}>
			{props.matrix.map((row, rowIndex) =>
				row.map((_, colIndex) => {
					return (
						<Pixel
							key={`${rowIndex}-${colIndex}`}
							background={Colors[props.matrix[rowIndex][colIndex]]}
							onClick={e => changeColor(rowIndex, colIndex)}
						/>
					);
				})
			)}
		</div>
	);
};

export default Canvas;
