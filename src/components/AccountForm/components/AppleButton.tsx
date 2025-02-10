import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import AppleImage from '../../../Assets/Images/ApplePathMain.png';
import AppleImage2 from '../../../Assets/Images/ApplePathMain2.png';

export const ApplePlayButton = () => (
    <Button
        variant="outlined"
        onClick={() => window.open('https://apps.apple.com/', '_blank')}
        sx={{

            textTransform: 'none',
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'row',
            backgroundColor: '#2D3748',
            border: '1px solid #000',
            height: '50px',
            background: '#1D1D1D',
            borderRadius: '8px',
            padding: '0 25px',
        }}
    >
        <Box sx={{ position: 'relative', top: '3px', left: '-5px' }}>
            <img
                src={AppleImage2}
                alt="App Store"
                style={{ position: 'absolute', top: '-5px', left: '11px' }}
            />
            <img
                src={AppleImage}
                alt="App Store"
                style={{ width: '24px', height: '24px' }}
            />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', color: 'white', lineHeight: 1 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '10px' }}>download on the</Typography>
            <Typography sx={{ fontWeight: 600, fontSize: '18px' }}>App Store</Typography>
        </Box>
    </Button>
);
