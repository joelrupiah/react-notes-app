import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotesListPage from './components/pages/NotesListPage';
import NotePage from './components/pages/NotePage';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route exact path="/" element={<NotesListPage />} />
					<Route path="/note/:id" element={<NotePage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
