import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home';
import { Toaster } from 'react-hot-toast';
import EditorPage from './Pages/EditorPage';

import './App.css';

function App() {
	return (
		<>
		<div>
			<Toaster
				position='top-right'
				toastOptions={{
					success: {
						theme: {
							primary: '#ffbd4b'
						},
					},
				}}
			></Toaster>
		</div>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/editor/:roomId' element={<EditorPage />} />
			</Routes>
		</BrowserRouter>
		</>
	);
}

export default App;
