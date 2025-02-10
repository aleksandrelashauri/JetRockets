import React from 'react';
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import GoogleImage from '../../../Assets/Images/google.png';
import { FormData, FormErrors } from '../../../components/AccountForm/types';
import { useAccountContext } from '../../../context/Accountcontext.tsx';
import { GooglePlayButton } from './GooglePlayButton.tsx';
import { ApplePlayButton } from './AppleButton.tsx';

interface FormActionsProps {
    formData: FormData;
    errors: FormErrors;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleGoogleSignIn?: () => void;
}

export const StoreButtons = ({ formData, errors, handleChange, handleGoogleSignIn }: FormActionsProps) => {
    const context = useAccountContext();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (context?.accountData.emailOrPhone === formData.emailOrPhone && context?.accountData.password === formData.password) {
            navigate('/dashboard');
            toast.success('Successfully logged in!');
        }
        else {
            toast.error('Invalid credentials');
        }
    }

    return (
        <>
            <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <Button onClick={handleLogin} type="submit" variant="contained" fullWidth sx={{ mt: 2, background: '#007AFF', fontWeight: 600, fontSize: '14px' }}>
                        Log In
                    </Button>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <Button
                        onClick={() => window.open('https://accounts.google.com', '_blank')}
                        type="button"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2, backgroundColor: '#2D3748', border: '1px solid #000', fontWeight: 600, fontSize: '14px' }}>
                        <img src={GoogleImage} alt="Google" style={{ marginRight: '1rem' }} />
                        Sign in with google
                    </Button>

                </Grid>
            </Grid>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                gap: '1rem',
                marginTop: '2rem'
            }}>
                <GooglePlayButton />
                <ApplePlayButton />
            </Box >
        </>

    );
};

