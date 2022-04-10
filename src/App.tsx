import { FormEvent, useState } from 'react';

import './App.css';

function App() {
	const intialMessage = Object.freeze('');
	const [message, setMessage] = useState(intialMessage);

	const onInputChange = (event: any) => {
		setMessage(event.target.value);
	};

	const onFormSubmit = (event: FormEvent) => {
		event.preventDefault();
	};

	return (
		<div className="App">
			<div className="chatBox">{message}</div>
			<form method="post" onSubmit={onFormSubmit}>
				<input type="text" onChange={onInputChange} />
				<input type="submit" value="Send" />
			</form>
		</div>
	);
}

export default App;
