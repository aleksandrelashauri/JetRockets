import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import VectorImage from '../../../Assets/Images/Vector.png';
import VectorImage2 from '../../../Assets/Images/Vector2.png';
import VectorImage3 from '../../../Assets/Images/Vector3.png';
import VectorImage4 from '../../../Assets/Images/Vector4.png';

export const GooglePlayButton = () => (
    <>
        <Button
            variant="outlined"

            onClick={() => window.open('https://play.google.com', '_blank')}
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
                position: 'relative',
                paddingLeft: '40px',
            }}
        >
            <Box sx={{ position: 'relative', top: '-14px', left: '-28px' }}>
                <img
                    src={VectorImage2}
                    alt="Google Play"
                    style={{
                        position: 'absolute',
                        left: '11px',
                        top: '8px',
                    }}
                />
                <img
                    src={VectorImage3}
                    alt="Google Play"
                    style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                    }}
                />
                <img
                    src={VectorImage4}
                    alt="Google Play"
                    style={{
                        position: 'absolute',
                        left: '0',
                        top: '13px',
                    }}
                />
                <img
                    src={VectorImage}
                    alt="Google Play"
                    style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                    }}
                />
            </Box>
            <Box sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', color: 'white', lineHeight: 1  // Add this to reduce space between lines
            }}>
                <Typography sx={{ fontWeight: 600, fontSize: '10px' }}>GET IT ON</Typography>
                <Typography sx={{ fontWeight: 600, fontSize: '18px' }}>Google Play</Typography>
            </Box>
        </Button>
    </>
);
