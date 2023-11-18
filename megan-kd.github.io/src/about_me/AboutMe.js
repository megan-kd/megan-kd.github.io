import { Typography, Stack, Divider, Card, Grid, CardMedia, Button } from '@mui/material'
import React from 'react';
import { Link } from "react-scroll";

const AboutMe = (props) => {
    const appBarOffset = -70;
    const data = props.data;
    const resumeOnClick = () => {
        window.open('/megandeyoung_resume_10_2023.pdf', '_blank');
    };

    const imgStyle = {
        float: 'left',
        paddingLeft: '10px'
    };

    const textStyle = {
        display: 'inline-flex !important'
    };

    return (
        <>
            <Stack spacing={2} id={'about_me'}>
                <Divider>
                    <Typography variant='h2'>
                        Megan DeYoung
                    </Typography>
                </Divider>
                <Grid container xs={12} spacing={{ xs: 2, md: 6, lg: 6}} justifyContent={'center'} alignItems={'stretch'}>
                    <Grid item xs={8.5} sm={7} md={6} lg={5} xl={4} style={imgStyle}>
                        <Stack spacing={3}>
                            <Card >
                                <CardMedia
                                    component={"img"}
                                    sx={{ height: '60%', objectFit: "contain" }}
                                    image={"/about_me.png"}
                                    title={'about_me'}
                                />
                            </Card>
                            <Stack direction={'row'} spacing={2} justifyContent={'center'}>
                                <Link to="contact" spy={true} smooth={true} offset={appBarOffset} duration={500}>
                                    <Button>Let's Connect!</Button>
                                </Link>
                                 <Button onClick={resumeOnClick}>Check out my Resume!</Button>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={11} sm={11} md={11} lg={7} xl={7} style={textStyle}>
                        <Typography sx={{wordBreak: 'break-word'}} variant='body2'>{data}</Typography>
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
}

export default AboutMe