import { Typography, Stack, Divider, Card, Grid, CardMedia, Button } from '@mui/material'
import React from 'react'

const AboutMe = (props) => {
    const data = props.data;
    return (
        <>
            <Stack spacing={2} id={'about_me'}>
                <Divider>
                    <Typography variant='h3'>
                        ABOUT ME
                    </Typography>
                </Divider>
                <Grid container xs={12} spacing={{ xs: 6, sm: 3 }} justifyContent={'center'} alignItems={'stretch'}>
                    <Grid item xs={7} sm={7} md={5}>
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
                                <Button>Check out my Resume!</Button>
                                <Button>Let's Connect!</Button>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={11} sm={11} md={6} >
                        <Typography sx>{data}</Typography>
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
}

export default AboutMe