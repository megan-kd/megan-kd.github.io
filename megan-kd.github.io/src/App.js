import './App.css';
import ProjectsSection from './projects/ProjectsSection';
import { aboutMeData, projectsData } from './data/ProjectData';
import SkillsSection from './skills/SkillsSection';
import { skillsData } from './data/ProjectData';
import Navbar from './navbar/Navbar';
import { Stack } from '@mui/material';
import AboutMe from './about_me/AboutMe';

function App() {
  return (
    <>
      <Stack spacing={2} id={"app"}>
        <Navbar/>
        <AboutMe id={'about_me'} data={aboutMeData}/>
        <SkillsSection data={skillsData}/>
        <ProjectsSection id={'projects'} data={projectsData}/>
      </Stack>
    </>
  );
}

export default App;
