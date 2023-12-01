import './App.css';
import ProjectsSection from './projects/ProjectsSection';
import { aboutMeData, projectsData } from './data/ProjectData';
import SkillsSection from './skills/SkillsSection';
import { skillsData } from './data/ProjectData';
import Navbar from './navbar/Navbar';
import { Stack } from '@mui/material';
import AboutMe from './about_me/AboutMe';
import Contact from './contact/Contact';
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import './font.css';

const themeOptions = {
  breakpoints: {
    values: {
      xs: 490,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#2f9c95',
    },
    default: {
      main: '#664147',
    },
    secondary: {
      main: '#EE6C82',
    },
    background: {
      default: '#e5f9e0',
      paper: '#e5f9e0',
      pink: '#FAD4DA'
    },
    text: {
      primary: '#664147',
      secondary: '#58383E', //'#664147', 
      disabled: '#605b5b',
      hint: '#664147',
    },
    gradient: {
      green: 'linear-gradient(45deg, #A3F7B5 30%, #40C9A2 80%)',
      pink: 'linear-gradient(45deg, #FAD4DA 30%, #FE7694 90%)',
    }
  },
  typography: {
    fontFamily: 'Roboto Mono',
    h1: {
      fontFamily: 'Mansalva',
    },
    h2: {
      fontFamily: 'Mansalva',
      
    },
    h3: {
      fontFamily: 'Mansalva',
      fontWeight: 'bold'
    },
    h4: {
      fontFamily: 'Mansalva',
    },
    h6: {
      fontFamily: 'Roboto Mono',
      color: '#664147',
      fontWeight: 'bold'
    },
    subtitle: {
      color: '#664147',
    },
    body2: {
      fontFamily: 'Roboto Mono',
      fontSize: '15px'
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
    MuiAppBar: {
      styleOverrides: {
        root: {
          width: '100%px !important'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #F4A4B1 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: '48px',
          padding: '0 30px',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 30,
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '0 30px 30px 30px',
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '25px 30px 16px 30px',
          textAlign: 'center',
          fontSize: "1.5rem",
          fontWeight: 'bold'
        }
      }
    },
    MuiCard: {
      variants: [
        {
          props: { variant: 'clickable' },
          style: {
            "&:hover": {
              cursor: "pointer",
              boxShadow: '10px 5px #2f9c95',
            }
          }
        }
      ]
    }
  },
};

const customTheme = responsiveFontSizes(createTheme(themeOptions));

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline enableColorScheme />
        <Stack spacing={2}>
          <Navbar/>
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
