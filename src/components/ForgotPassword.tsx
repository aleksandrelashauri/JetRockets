import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAccountContext } from '../context/Accountcontext.tsx';
import { Box, Paper, Typography, Button, Stack, TextField } from '@mui/material';

export const ForgotPassword: React.FC = () => {
    const context = useAccountContext();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailSubmit = () => {
        if (email === context?.accountData.emailOrPhone) {
            setShowPassword(true);
        } else {
            toast.error('Email not found');
        }
    };

    const handleLogout = () => {
        toast.success('Logged out successfully');
        navigate('/login');
    };

    return (
        <Box sx={{ height: '100vh', width: '60%', mx: 'auto', mt: 4, p: 2 }}>
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
                    Forgot Password
                </Typography>
                <Stack spacing={2} sx={{ mb: 4 }}>
                    <TextField
                        label="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleEmailSubmit}
                    >
                        Find Password
                    </Button>

                    {showPassword && (
                        <TextField
                            label="Your Password"
                            value={context?.accountData.password}
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                        />
                    )}
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