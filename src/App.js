import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "../src/Pages/Home";

function App() {

	return (
		<div>
			<BrowserRouter>
				<Routes>

					<Route path='/' element={<Home />} />

				</Routes>
			</BrowserRouter>

		</div>

	)
}

export default App;
