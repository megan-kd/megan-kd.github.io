import React from 'react';
import { AppBar, Box, IconButton, Menu, MenuItem, Stack, Toolbar } from '@mui/material';
import { Link, animateScroll as scroll } from "react-scroll";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';

const NavbarHamburger = () => {
    const appBarOffset = -70;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Box sx={{ marginRight: "auto" }}>
                    <IconButton color='inherit' onClick={scrollToTop} aria-label={'Scroll to Top'}>
                        <HomeIcon sx={{ fontSize: '45px' }} />
                    </IconButton>
                </Box>
                <Box sx={{ marginLeft: "auto" }}>
                    <Stack direction={'row'}>
                        <IconButton
                            onClick={handleClick}
                            color='inherit'
                            aria-label={'Navigation Menu'}
                        >
                            <MenuIcon sx={{ fontSize: '45px' }} />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link to="about_me" spy={true} smooth={true} offset={appBarOffset} duration={500} aria-label={'About Me'}>
                                    About Me
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="skills" spy={true} smooth={true} offset={appBarOffset} duration={500} aria-label={'Skills'}>
                                    Skills
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="projects" spy={true} smooth={true} offset={appBarOffset} duration={500} aria-label={'Projects'}>
                                    Projects
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="contact" spy={true} smooth={true} offset={appBarOffset} duration={500} aria-label={'Contact'}>
                                    Contact
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Stack>
                </Box>
            </Toolbar>
        </AppBar>
    )
};

export default NavbarHamburger;