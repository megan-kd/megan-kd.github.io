import React from 'react'
import { AppBar, Button, Toolbar, Box, Stack, IconButton } from '@mui/material';
import { Link, animateScroll as scroll } from "react-scroll";
import HomeIcon from '@mui/icons-material/Home';
import { useTheme, useMediaQuery } from '@mui/material';

const Navbar = () => {
    const theme = useTheme();
    const appBarOffset = -70;
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const smallStyle = {
        paddingLeft: '10px !important',
        paddingRight: '10px !important'
    }

    return (
        <>
            <AppBar position={'sticky'} id={'appbar'}>
                <Toolbar >
                    <Box sx={{ marginRight: "auto" }} >
                        <IconButton color='inherit' onClick={scrollToTop}>
                            <HomeIcon fontSize='large' />
                        </IconButton>
                    </Box>
                    <Box sx={{ marginLeft: "auto" }}>
                        <Stack direction={'row'} spacing={{ xs: 3, sm: 2, md: 2 }}>
                            <Link to="about_me" spy={true} smooth={true} offset={appBarOffset} duration={500}>
                                <Button 
                                    color='inherit'
                                    size={useMediaQuery(theme.breakpoints.down("sm")) ? "small" : "medium"}
                                    sx={useMediaQuery(theme.breakpoints.down("sm")) ? smallStyle : {}}
                                >
                                    About Me
                                </Button>
                            </Link>
                            <Link to="skills" spy={true} smooth={true} offset={appBarOffset} duration={500}>
                                <Button 
                                    color='inherit'
                                    size={useMediaQuery(theme.breakpoints.down("sm")) ? "small" : "medium"}
                                    sx={useMediaQuery(theme.breakpoints.down("sm")) ? smallStyle : {}}
                                >
                                    Skills
                                </Button>
                            </Link>
                            <Link to="projects" spy={true} smooth={true} offset={appBarOffset} duration={500}>
                            <Button 
                                    color='inherit'
                                    size={useMediaQuery(theme.breakpoints.down("sm")) ? "small" : "medium"}
                                    sx={useMediaQuery(theme.breakpoints.down("sm")) ? smallStyle : {}}
                                >
                                    Projects
                                </Button>
                            </Link>
                            <Link to="contact" spy={true} smooth={true} offset={appBarOffset} duration={500}>
                            <Button 
                                    color='inherit'
                                    size={useMediaQuery(theme.breakpoints.down("sm")) ? "small" : "medium"}
                                    sx={useMediaQuery(theme.breakpoints.down("sm")) ? smallStyle : {}}
                                >
                                    Contact
                                </Button>
                            </Link>
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar