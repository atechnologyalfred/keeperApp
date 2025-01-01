import Header from './components/Header.jsx';
import List from './components/List.jsx';
import Input from './components/Input.jsx';
import { useState } from 'react';
export default function App () {
	const [state, setState] = useState([])
	function handleSelect(value) {
		console.log(value)
		setState(preState => {
			return [
				...preState,
				value,
			]
		})

	}
	function handleDelete(id) {
		setState(prevState => {
			return(
			prevState.filter((item, index) => {
		return (		id !== index )
			})
		)
		})

	}
	return (
		<div className="app">
			<Header />
			<Input  onset={handleSelect} />
			<ul>
				{state.map((item, i) => <List  key={i} {...item} oncheck={handleDelete} id={i}/>)}
			</ul>
		</div>
	)
}