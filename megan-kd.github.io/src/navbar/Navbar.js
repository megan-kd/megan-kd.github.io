import React from 'react'
import { AppBar, Button, Toolbar, Box, Stack, IconButton } from '@mui/material';
import { Link, animateScroll as scroll } from "react-scroll";
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
    const appBarOffset = -70;
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const buttonStyle = {
        minWidth: '10px'
    };

    return (
        <>
            <AppBar position={'sticky'} id={'appbar'}>
                <Toolbar >
                    <Box sx={{ marginRight: "auto" }} >
                        <IconButton color='inherit' onClick={scrollToTop}>
                            <HomeIcon fontSize='large'/>
                        </IconButton>
                    </Box>
                    <Box sx={{ marginLeft: "auto" }}>
                        <Stack direction={'row'} spacing={{xs: 1, sm: 3.5, md: 2}}>
                            <Link to="about_me" spy={true} smooth={true} offset={appBarOffset} duration={500}>
                                <Button color='inherit' style={buttonStyle}>
                                    About Me
                                </Button>
                            </Link>
                            <Link to="skills" spy={true} smooth={true} offset={appBarOffset} duration={500}>
                                <Button color='inherit'>
                                    Skills
                                </Button>
                            </Link>
                            <Link to="projects" spy={true} smooth={true} offset={appBarOffset} duration={500}>
                                <Button color='inherit'>
                                    Projects
                                </Button>
                            </Link>
                            <Link to="contact" spy={true} smooth={true} offset={appBarOffset} duration={500}>
                                <Button color='inherit'>
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