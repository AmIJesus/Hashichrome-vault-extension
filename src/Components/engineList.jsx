import React, { useState } from 'react';
import Engine from './engine.jsx'

export default function engineList() {

	// const [engineNameList] = useState(getEnginelist());


	// const getEnginelist = () => {
	// 	let engineList = [];
	// 	fetch('https://reqres.in/api/unknown')
	// 		.then(res => res.json()).then((data) => {
	// 			data.data.forEach((engine) => {
	// 				engineList.push(engine);
	// 			})
	// 		})
	// 	return engineList;
	//}
	return (
		<div>
			<Engine engineName="helloWorld" />
			<Engine engineName="helloWorld" />
			<Engine engineName="helloWorld" />
			<Engine engineName="helloWorld" />
			<Engine engineName="helloWorld" />
			<Engine engineName="helloWorld" />
			<Engine engineName="helloWorld" />
			<Engine engineName="helloWorld" />
			<Engine engineName="helloWorld" />
			<Engine engineName="helloWorld" />
			<Engine engineName="helloWorld" />
			<Engine engineName="helloWorld" />
			<Engine engineName="helloWorld" />
			<Engine engineName="helloWorld" />
			<Engine engineName="helloWorld" />
		</div>
	);
}