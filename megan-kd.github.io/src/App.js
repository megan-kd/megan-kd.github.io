import './App.css';
import ProjectsSection from './projects/ProjectsSection';
import { projectsData } from './data/ProjectData';

function App() {
  return (
    <>
      <ProjectsSection data={projectsData}/>
    </>
  );
}

export default App;
