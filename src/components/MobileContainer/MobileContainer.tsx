import React from 'react';
import { Box, Typography } from '@mui/material';
import MobileImage from '../../Assets/Images/mobile.png';

const MobileContainer: React.FC<{}> = () => {
    return (
        <Box sx={{
            backgroundColor: '#007AFF',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
        }} >
            <Typography
                sx={{ textAlign: 'center', mt: 2, mb: 2, color: 'white', fontWeight: 600, fontSize: '28px' }}>Social media shared today, tomorrow or by location</Typography>
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'relative',
                    width: '100%',
                    justifyContent: 'center',
                }}>
                    <Box
                        sx={{
                            position: 'absolute',
                            width: '470px',
                            height: '470px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #007AFF 0%, #0F70DA 100%)',
                            top: '46%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 0
                        }}
                    />
                    <img
                        src={MobileImage}
                        alt="Mobile"
                        style={{ width: 'auto', height: '360px', position: 'relative', zIndex: 1 }}
                    />
                    <img
                        src={MobileImage}
                        alt="Mobile"

                        style={{
                            position: 'absolute',
                            bottom: '-24%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            height: '530px',
                            width: 'auto',
                            zIndex: 2
                        }}
                    />
                    <img
                        src={MobileImage}
                        alt="Mobile"
                        style={{ width: 'auto', height: '360px', position: 'relative', zIndex: 1 }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default MobileContainer;

