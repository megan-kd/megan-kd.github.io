import React from 'react';
import { Divider, Stack, Typography, Grid, Box, Paper, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material';

const Contact = () => {
    const theme = useTheme();
    const paperStyle = {
        backgroundImage: "url('/cherryblossom75.avif')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        maxHeight: '400px',
    };

    const iconStyle = {
        fontSize: "20vw",
        boxShadow: '5px 10px 30px'
    };

    const iconButtonStyle = {
        color: "#492F33",
        "&:hover": {
            color: theme.palette.text.primary,
            background: 'none'
        },
    };

    const contactTitleStyle = {
        fontVariant: 'small-caps',
        fontSize: '10vw'
    }

    return (
        <>
            <Stack spacing={2} id={'contact'} >
                <Paper style={paperStyle} elevation={0} square={true} maxHeight={'400px'}>
                    <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                        <Typography variant='h2' style={contactTitleStyle}>
                            {"Let's Connect!"}
                        </Typography>
                    </Grid>
                    <Grid container spacing={{ xs: 2 }} columns={{ xs: 6, sm: 8, md: 12 }} minHeight={600} justifyContent={'center'}>
                        <Grid item xs={3} display={"flex"} justifyContent={"center"}>
                            `<IconButton sx={iconButtonStyle}>
                                <GitHubIcon style={iconStyle} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={3} display={"flex"} justifyContent={"center"}>
                            <IconButton sx={iconButtonStyle}>
                                <LinkedInIcon style={iconStyle} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Paper>
            </Stack>
        </>
    )
}

export default Contact