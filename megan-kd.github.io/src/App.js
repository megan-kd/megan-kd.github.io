import './App.css';
import ProjectsSection from './projects/ProjectsSection';
import { aboutMeData, projectsData } from './data/ProjectData';
import SkillsSection from './skills/SkillsSection';
import { skillsData } from './data/ProjectData';
import Navbar from './navbar/Navbar';
import { Stack } from '@mui/material';
import AboutMe from './about_me/AboutMe';
import Contact from './contact/Contact';
import { createTheme, ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from '@mui/material';

const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#2f9c95',
    },
    secondary: {
      main: '#EE6C82',
    },
    background: {
      default: '#e5f9e0',
      paper: '#e5f9e0',
    },
    text: {
      primary: '#664147',
      secondary: '#664147',
      disabled: '#605b5b',
      hint: '#664147',
    },
  },
  typography: {
    fontFamily: 'Roboto Mono',
    h1: {
      fontFamily: 'Agbalumo',
    },
    h2: {
      fontFamily: 'Agbalumo',
    },
    h3: {
      fontFamily: 'Agbalumo',
    },
    h4: {
      fontFamily: 'Agbalumo',
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#689f38',
        color: '#fff',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #F4A4B1 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 48,
          padding: '0 30px',
        },
      },
    },
  },
};

const customTheme = createTheme(themeOptions);

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline enableColorScheme/>
        <Stack spacing={2}>
          <Navbar />
          <AboutMe data={aboutMeData} />
          <SkillsSection data={skillsData} />
          <ProjectsSection data={projectsData} />
          <Contact />
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default App;
