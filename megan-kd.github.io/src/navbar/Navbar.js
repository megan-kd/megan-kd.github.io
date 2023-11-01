import React from 'react'
import { AppBar, Button, Toolbar, Box } from '@mui/material';
import { Link } from "react-scroll";

const Navbar = () => {
    const appBarOffset = -70;
    return (
        <>
            <AppBar position={'sticky'} id={'appbar'}>
                <Toolbar >
                    <Box sx={{ marginRight: "auto" }} >
                        <Button color='inherit'>Home</Button>
                    </Box>
                    <Box sx={{ marginLeft: "auto" }}>
                        <Link to="about_me" spy={true} smooth={true} offset={appBarOffset} duration={500}>
                            <Button color='inherit'>
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
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar