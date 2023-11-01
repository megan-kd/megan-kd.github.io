import { Typography, Stack, Divider, Card, Grid, CardMedia, Button} from '@mui/material'
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
                <Grid container xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <Card>
                            <CardMedia
                                component={"img"}
                                sx={{ height: '60%', objectFit: "contain" }}
                                image={"/about_me.png"}
                                title={'about_me'}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography>{data}</Typography>
                        <Button>Check out my Resume!</Button>
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
}

export default AboutMe