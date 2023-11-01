import React from 'react';
import { Divider, Stack, Typography, Grid} from '@mui/material';

const Contact = () => {
    return (
        <>
            <Stack spacing={2} id={'contact'}>
                <Divider>
                    <Typography variant='h3'>
                        CONTACT
                    </Typography>
                </Divider>
                <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} minHeight={600}>
                    placeholder
                </Grid>
            </Stack>
        </>
    )
}

export default Contact