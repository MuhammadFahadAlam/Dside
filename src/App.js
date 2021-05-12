import { ProjectCard } from './components';
import './App.css'
import {DataProvider} from './contexts/DataContext'

function App() {
	return (
		<DataProvider>
			<ProjectCard/>
		</DataProvider>
	);
}

export default App;
