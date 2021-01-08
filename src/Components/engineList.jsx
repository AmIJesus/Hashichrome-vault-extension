/*global chrome*/
import React, { useState, useEffect } from 'react';
import Engine from './engine.jsx'

export default function engineList() {

	 const [engines, setEngines] = useState([]);

	 useEffect(() => {
		fetch('https://reqres.in/api/unknown').then(res => res.json().then(engineList => {
			setEngines(engineList.data);
		}))
	})

	return (
		<div>
			{engines.map(engine => <Engine engineName={engine.name} />)}
		</div>
	);
}