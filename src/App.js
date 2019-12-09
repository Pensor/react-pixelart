import React, { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import DrawingsList from './components/DrawingsList';

function App() {
	const emptyMatrix = Array(30)
		.fill()
		.map(() => Array(30).fill(0));

	const listKeys = [];
	for (let i = 0; i < localStorage.length; i++) {
		listKeys.push(localStorage.key(i));
	}

	const [color, setColor] = useState(0);

	const [list, setList] = useState(listKeys);

	const [matrix, setMatrix] = useState(emptyMatrix);

	const changeColor = (rowIndex, colIndex) => {
		const newMatrix = matrix.slice();
		newMatrix[rowIndex][colIndex] = color;
		setMatrix(newMatrix);
	};

	const saveDrawing = drawingName => {
		setList([...(list || []), drawingName]);
		window.localStorage.setItem(drawingName, JSON.stringify(matrix));
		setMatrix(emptyMatrix);
	};

	const loadDrawing = drawingName => {
		setMatrix(JSON.parse(window.localStorage.getItem(drawingName)));
	};

	return (
		<div className="App">
			<ColorPicker currentColor={color} setColor={color => setColor(color)} />
			<Canvas changeColor={changeColor} matrix={matrix} />
			<DrawingsList
				list={list}
				saveDrawing={saveDrawing}
				loadDrawing={loadDrawing}
			/>
		</div>
	);
}

export default App;
