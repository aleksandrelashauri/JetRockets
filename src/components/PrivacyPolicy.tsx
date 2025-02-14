import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, Typography, Button, Stack } from '@mui/material';

export const PrivacyPolicy: React.FC = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 2 }}>

            <Box
                component="img"
                src="https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif"
                alt="Programmer debugging code meme"
                sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 300,
                    objectFit: 'contain',
                    mb: 3,
                    borderRadius: 1
                }}
            />
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Terms and Conditions
                </Typography>
                <Stack spacing={2} sx={{ mb: 4 }}>
                    <Typography>
                        no policy
                    </Typography>
                </Stack>
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleBack}
                >
                    back
                </Button>
            </Paper>
        </Box>
    );
};