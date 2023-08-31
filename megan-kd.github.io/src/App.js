//import logo from './logo.svg';
import './App.css';
import ProjectsSection from './projects/ProjectsSection';
import { projectsData } from './data/ProjectData';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <ProjectsSection data={projectsData}/>
  );
}

export default App;
