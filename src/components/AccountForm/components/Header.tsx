import React from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import LogoImage from '../../../Assets/Images/logo.png';

export const Header = () => (
    <Grid container >
        <Grid size={{ xs: 12, md: 12, lg: 12 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <img
                src={LogoImage}
                alt="Logo"
                style={{
                    marginRight: '1rem'
                }}
            />
            <Typography sx={{ fontWeight: 600, fontSize: '18px' }}>logo</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 12 }} sx={{ mb: 3, mt: 5 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '28px' }}>Create Account</Typography>
            <Typography sx={{ fontWeight: 400, fontSize: '14px' }}>For business, band or celebrity.</Typography>
        </Grid>
    </Grid>
);
