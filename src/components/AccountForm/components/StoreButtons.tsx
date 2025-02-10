import React from 'react';
import { GooglePlayButton } from './GooglePlayButton.tsx';
import { ApplePlayButton } from './AppleButton.tsx';

import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import GoogleImage from '../../../Assets/Images/google.png';
import { FormData, FormErrors } from '../types';
import { useNavigate } from 'react-router-dom';


interface FormActionsProps {
    formData: FormData;
    errors: FormErrors;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleGoogleSignIn?: () => void;
    onSuccessfulCreate?: () => void;
}

export const StoreButtons = ({ formData, errors, handleChange, handleGoogleSignIn, onSuccessfulCreate }: FormActionsProps) => {
    const navigate = useNavigate();

    const handleclick = () => {
        navigate('/login');
    }
    return (
        <>
            <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        onClick={onSuccessfulCreate}
                        sx={{ mt: 2, background: '#007AFF', fontWeight: 600, fontSize: '14px' }}
                    >
                        Create Account
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
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', mt: 2, mb: 5 }}>
                <Typography sx={{ fontWeight: 400, fontSize: '14px' }}>Already have an account?</Typography>
                <Button type="submit" onClick={handleclick} sx={{ fontWeight: 400, fontSize: '14px', color: '#007AFF' }}>
                    Log In
                </Button>
            </Box>

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