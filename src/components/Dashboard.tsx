import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAccountContext } from '../context/Accountcontext.tsx';
import { Box, Paper, Typography, Button, Stack } from '@mui/material';

export const Dashboard: React.FC = () => {
    const context = useAccountContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        toast.success('Logged out successfully');
        navigate('/login');
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 2 }}>
            <Box
                component="img"
                src="https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif"
                alt="Funny IT crowd computer reaction"
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
                    Welcome, {context?.accountData.firstName}!
                </Typography>
                <Stack spacing={2} sx={{ mb: 4 }}>
                    <Typography>
                        <strong>Email:</strong> {context?.accountData.emailOrPhone}
                    </Typography>
                    <Typography>
                        <strong>Name:</strong> {context?.accountData.firstName} {context?.accountData.lastName}
                    </Typography>
                </Stack>
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </Paper>
        </Box>
    );
};