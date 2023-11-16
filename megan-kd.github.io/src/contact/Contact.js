import React from 'react';
import { Stack, Typography, Grid, Paper, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material';

const Contact = () => {
    const theme = useTheme();
    const paperStyle = {
        //backgroundImage: "url('/cherryblossom75.avif')",
        //backgroundRepeat: "no-repeat",
        //backgroundSize: "cover",
        ///backgroundPosition: "center center",
        maxHeight: '324px',
        backgroundColor: theme.palette.background.pink,
        paddingBottom: '15px'
    };

    const iconStyle = {
        fontSize: "45px",
    };

    const iconButtonStyle = {
        color: "#492F33",
        "&:hover": {
            color: theme.palette.text.primary,
            background: 'none'
        },
        height: '60px',
    };

    const contactTitleStyle = {
        fontVariant: 'small-caps',
        //fontSize: '5vw',
        paddingTop: '15px'
    };


    return (
        <>
            <Stack spacing={2} id={'contact'}>
                <Paper style={paperStyle} elevation={0} square={true}>
                    <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                        <Typography variant='h2' style={contactTitleStyle}>
                            {"Let's Connect!"}
                        </Typography>
                    </Grid>
                    <Grid container columns={{ xs: 6, sm: 8, md: 12 }} justifyContent={'center'} >
                        <Grid item xs={1} display={"flex"} justifyContent={"center"}>
                            `<IconButton sx={iconButtonStyle} rel="noopener noreferrer" href="https://github.com/megan-kd" target="_blank">
                                <GitHubIcon style={iconStyle} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={1} display={"flex"} justifyContent={"center"}>
                            <IconButton sx={iconButtonStyle} rel="noopener noreferrer" href="https://www.linkedin.com/in/megan-kcd/" target="_blank">
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