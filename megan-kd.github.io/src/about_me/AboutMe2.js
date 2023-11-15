import { Typography, Stack, Divider, Card, Grid, CardMedia, Button } from '@mui/material'
import React from 'react';
import { Link } from "react-scroll";

const AboutMe2 = (props) => {
    const appBarOffset = -70;
    const data = props.data;
    const resumeOnClick = () => {
        window.open('/megandeyoung_resume_10_2023.pdf', '_blank');
    };
    return (
        <>
            <Stack spacing={2} id={'about_me'}>
                <Divider>
                    <Typography variant='h2'>
                        ABOUT ME
                    </Typography>
                </Divider>
                <Grid container xs={12} spacing={{ xs: 6, sm: 3 }} justifyContent={'center'} alignItems={'stretch'}>
                    <Grid item xs={8.5} sm={7} md={5} style={{paddingLeft: 0}} zeroMinWidth>
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
                    <Grid item xs={11} sm={11} md={6} style={{paddingLeft: '15px'}} zeroMinWidth>
                        <Typography sx>{data}</Typography>
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
}

export default AboutMe2