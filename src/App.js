import React, { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import DrawingsList from './components/DrawingsList';

function App() {
	const [color, setColor] = useState(0);
	const [list, setList] = useState(['first', 'second', 'third']);

	const saveList = drawingName => {
		setList(list.concat(drawingName));
	};
	return (
		<div className="App">
			<ColorPicker currentColor={color} setColor={color => setColor(color)} />
			<Canvas currentColor={color} />
			<DrawingsList list={list} saveList={saveList} />
		</div>
	);
}

export default App;
