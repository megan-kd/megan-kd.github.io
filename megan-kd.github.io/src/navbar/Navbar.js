import React from 'react'
import { AppBar, Button, Toolbar, Box } from '@mui/material';

const Navbar = () => {
  return (
    <>
        <AppBar position={'sticky'}>
            <Toolbar >
                <Box sx={{ marginRight: "auto" }} >
                    <Button color='inherit'>Home</Button>
                </Box>
                <Box sx={{ marginLeft: "auto" }}>
                    <Button color='inherit'>About Me</Button>
                    <Button color='inherit'>Skills</Button>
                    <Button color='inherit'>Projects</Button>
                    <Button color='inherit'>Resume</Button>
                    <Button color='inherit'>Contact</Button>
                </Box>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar