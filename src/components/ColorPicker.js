import React from 'react';
import Pixel from './Pixel';
import Colors from '../Colors';

export default props => {
	return (
		<div className="colorpicker">
			{Colors.map((color, index) => {
				return (
					<Pixel
						onClick={e => props.setColor(index)}
						key={index}
						background={color}
						current={Colors[props.currentColor] === color}
					/>
				);
			})}
		</div>
	);
};
