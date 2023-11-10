import React from 'react';
import { Divider, Stack, Typography, Grid, Box, Paper, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material';

const Contact = () => {
    const theme = useTheme();
    const paperStyle = {
        backgroundImage: "url('/cherryblossom1.avif')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: '600px'
    };

    const iconStyle = {
        fontSize: "20vw",
        boxShadow: '5px 10px 30px'
    };

    const iconButtonStyle = {
        color: theme.palette.text.primary,
        "&:hover": { 
            color: "#492F33",
            background: 'none'
        }
    };

    return (
        <>
            <Stack spacing={2} id={'contact'}>
                <Divider>
                    <Typography variant='h2'>
                        CONTACT
                    </Typography>
                </Divider>
                <Paper style={paperStyle} elevation={0} square={true}>
                        <Stack direction={'horizontal'}>
                            <IconButton sx={iconButtonStyle}>
                                <GitHubIcon style={iconStyle}/>
                            </IconButton>
                            <IconButton sx={iconButtonStyle}>
                                <LinkedInIcon style={iconStyle}/>
                            </IconButton>
                        </Stack>
                </Paper>
            </Stack>
        </>
    )
}

export default Contact