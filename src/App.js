import React, { Component } from 'react';
import Blog from '../src/containers/Blog/Blog';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

class App extends Component {
	render() {
		return (
			// Example for server deployment example(example.com/my-app)
			//<BrowserRouter basename="/my-app">
			<BrowserRouter>
				<div className="App">
					<Blog />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
