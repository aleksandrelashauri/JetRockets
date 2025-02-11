import React from 'react';
import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { FormData, FormErrors } from '../types';
import { useNavigate } from 'react-router-dom';

interface FormActionsProps {
    formData: FormData;
    errors: FormErrors;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormActions = ({ formData, errors, handleChange }: FormActionsProps) => {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                <FormControlLabel
                    control={<Checkbox name="rememberMe" checked={formData.rememberMe} onChange={handleChange} sx={{
                        color: '#D1D1D1',
                    }} />}
                    label="Remember me"
                    sx={{
                        fontWeight: 400,
                        fontSize: '14px',
                    }}
                />
                <Button sx={{ fontWeight: 400, fontSize: '14px', color: '#007AFF' }} onClick={() => navigate('/forgotPassword')}>Forgot password?</Button>
            </Box>
            <FormControlLabel
                control={<Checkbox name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} sx={{
                    color: '#D1D1D1',
                }} />}
                sx={{
                    fontWeight: 400,
                    fontSize: '14px',
                    fontFamily: 'inherit',
                }}
                label={
                    <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexWrap: 'wrap' }}>
                        <Typography component="span" sx={{
                            fontSize: '14px',
                            fontFamily: 'inherit',
                            fontWeight: 400,
                        }}>
                            I agree to the
                        </Typography>
                        <Button
                            component="a"
                            href="/JetRockets/terms"
                            sx={{
                                color: '#007AFF',
                                p: 0,
                                minWidth: 'auto',
                                textTransform: 'none',
                                fontSize: '14px',
                                fontFamily: 'inherit',
                                fontWeight: 400,
                                '&:hover': { background: 'none' }
                            }}
                        >
                            Terms
                        </Button>
                        <Typography component="span" sx={{
                            color: '#2D3748',
                            fontSize: '14px',
                            fontFamily: 'inherit',
                            fontWeight: 400,
                        }}>
                            and
                        </Typography>
                        <Button
                            component="a"
                            href="/JetRockets/privicyPolicy"
                            sx={{
                                color: '#007AFF',
                                p: 0,
                                minWidth: 'auto',
                                textTransform: 'none',
                                fontSize: '14px',
                                fontFamily: 'inherit',
                                fontWeight: 400,
                                '&:hover': { background: 'none' }
                            }}
                        >
                            Privacy Policy
                        </Button>
                    </Box>
                }
            />
            {errors.termsAccepted && <Typography color="error">{errors.termsAccepted}</Typography>}
        </>
    );
};
