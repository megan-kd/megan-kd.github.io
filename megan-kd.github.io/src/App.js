import './App.css';
import ProjectsSection from './projects/ProjectsSection';
import { projectsData } from './data/ProjectData';
import SkillsSection from './skills/SkillsSection';
import { skillsData } from './data/ProjectData';

function App() {
  return (
    <>
      <SkillsSection data={skillsData}/>
      <ProjectsSection data={projectsData}/>
    </>
  );
}

export default App;
