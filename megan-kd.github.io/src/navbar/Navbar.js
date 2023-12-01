import React from 'react'
import { AppBar, Button, Toolbar, Box, Stack, IconButton } from '@mui/material';
import { Link, animateScroll as scroll } from "react-scroll";
import HomeIcon from '@mui/icons-material/Home';
import { useTheme, useMediaQuery } from '@mui/material';
import NavbarHamburger from './NavbarHamburger';

const Navbar = () => {
    const theme = useTheme();
    const appBarOffset = -70;
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const smallStyle = {
        paddingLeft: '10px !important',
        paddingRight: '10px !important'
    };

    const desktopSize = useMediaQuery(theme.breakpoints.up('xs'));
    const smallSize = useMediaQuery(theme.breakpoints.between('xs', 'sm'))

    return (
        <> {desktopSize ?
            <AppBar position={'sticky'} id={'appbar'}>
                <Toolbar >
                    <Box sx={{ marginRight: "auto" }} >
                        <IconButton color='inherit' onClick={scrollToTop}>
                            <HomeIcon sx={{ fontSize: '45px' }} />
                        </IconButton>
                    </Box>
                    <Box sx={{ marginLeft: "auto" }}>
                        <Stack direction={'row'} spacing={{ xs: 3, sm: 2, md: 2 }}>
                            <Link to="about_me" spy={true} smooth={true} offset={appBarOffset} duration={500}>
                                <Button
                                    color='inherit'
                                    size={smallSize ? "small" : "medium"}
                                    sx={smallSize ? smallStyle : {}}
                                    variant='contained'
                                >
                                    About Me
                                </Button>
                            </Link>
                            <Link to="skills" spy={true} smooth={true} offset={appBarOffset} duration={500}>
                                <Button
                                    color='inherit'
                                    size={smallSize ? "small" : "medium"}
                                    sx={smallSize ? smallStyle : {}}
                                    variant='contained'
                                >
                                    Skills
                                </Button>
                            </Link>
                            <Link to="projects" spy={true} smooth={true} offset={appBarOffset} duration={500}>
                                <Button
                                    color='inherit'
                                    size={smallSize ? "small" : "medium"}
                                    sx={smallSize ? smallStyle : {}}
                                    variant='contained'
                                >
                                    Projects
                                </Button>
                            </Link>
                            <Link to="contact" spy={true} smooth={true} offset={appBarOffset} duration={500}>
                                <Button
                                    color='inherit'
                                    size={smallSize ? "small" : "medium"}
                                    sx={smallSize ? smallStyle : {}}
                                    variant='contained'
                                >
                                    Contact
                                </Button>
                            </Link>
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar> : <NavbarHamburger />}
        </>
    )
}

export default Navbar