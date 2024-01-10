import { Typography, Stack, Divider, Card, Grid, CardMedia, Button, Collapse } from '@mui/material'
import React, { useState } from 'react';
import { Link } from "react-scroll";
import { useTheme, useMediaQuery } from '@mui/material';

const AboutMe = (props) => {
    const theme = useTheme();
    const appBarOffset = -70;
    const data = props.data;
    const [open, setOpen] = useState(false);

    const resumeOnClick = () => {
        window.open('/megandeyoung_resume.pdf', '_blank');
    };

    const imgStyle = {
        padding: '0 15px 0 15px',
    };

    const textStyle = {
        display: 'inline-flex !important',
        paddingTop: '0px',
        paddingLeft: '15px',
        paddingRight: '15px',
    };

    const showMoreOnClick = () => {
        setOpen(!open);
    }

    const mobileSize = useMediaQuery(theme.breakpoints.up('xs'));
    const showMoreSize = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <>
            <Stack spacing={2} id={'about_me'}>
                <Divider>
                    <Typography variant='h2'>
                        Megan DeYoung
                    </Typography>
                </Divider>
                <Grid container spacing={{ xs: 3, md: 3, lg: 6 }} justifyContent={'center'} alignItems={'stretch'} maxWidth={'100%'}>
                    <Grid item={true} xs={8} sm={8} md={5} lg={5} xl={4} style={imgStyle}>
                        <Stack spacing={3}>
                            <Card >
                                <CardMedia
                                    component={"img"}
                                    sx={{ height: '60%', objectFit: "contain" }}
                                    image={"/about_me.avif"}
                                    title={'about_me'}
                                />
                            </Card>
                            <Stack direction={'row'} spacing={2} justifyContent={'center'} sx={{ padding: '0 10px 0 10px' }}>
                                <Link to="contact" spy={true} smooth={true} offset={appBarOffset} duration={500}>
                                    <Button size={mobileSize ? 'small' : 'medium'} aria-label={'Contact'} variant='contained'>Let's Connect!</Button>
                                </Link>
                                <Button size={mobileSize ? 'small' : 'medium'} onClick={resumeOnClick} aria-label={'Check out my resume!'} variant='contained'>Check out my Resume!</Button>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item={true} xs={11} sm={11} md={11} lg={6} xl={7} style={textStyle}>
                        {showMoreSize ? <Typography sx={{ wordBreak: 'break-word' }} variant='body2'>{data}</Typography> : <><Collapse
                            in={open}
                            collapsedSize={'250px'}
                        >
                            <Typography sx={{ wordBreak: 'break-word' }} variant='body2'>{data}</Typography>
                        </Collapse>
                            <Button variant='text' onClick={showMoreOnClick} aria-label={open ? "Show Less" : "Show More"}>
                                <Typography variant='body' fontWeight={'bold'}>{open ? "Show Less..." : "Show More..."}</Typography>
                            </Button>
                        </>}
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
}

export default AboutMe