import { TextField, FormHelperText } from '@mui/material';
import { FormData, FormErrors } from '../types/index.ts';
import React from 'react';
import Grid from '@mui/material/Grid2';

interface FormFieldsProps {
    formData: FormData;
    errors: FormErrors;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormFields = ({ formData, errors, handleChange }: FormFieldsProps) => (
    <>
        <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <FormHelperText id="outlined-weight-helper-text" sx={{ fontWeight: 400, fontSize: '14px', color: '#2D3748' }}>First Name</FormHelperText>
                <TextField
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    fullWidth
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <FormHelperText id="outlined-weight-helper-text" sx={{ fontWeight: 400, fontSize: '14px', color: '#2D3748' }}>Last Name</FormHelperText>
                <TextField
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    fullWidth
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <FormHelperText id="outlined-weight-helper-text" sx={{ fontWeight: 400, fontSize: '14px', color: '#2D3748' }}>Email or Phone Number</FormHelperText>
                <TextField
                    name="emailOrPhone"
                    value={formData.emailOrPhone}
                    onChange={handleChange}
                    error={!!errors.emailOrPhone}
                    helperText={errors.emailOrPhone}
                    fullWidth
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <FormHelperText id="outlined-weight-helper-text" sx={{ fontWeight: 400, fontSize: '14px', color: '#2D3748' }}>
                    Date of Birth (MM/DD/YY)
                </FormHelperText>
                <TextField
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth ? formData.dateOfBirth : ""}
                    onChange={handleChange}
                    fullWidth
                    slotProps={{
                        input: {
                            onClick: (e) => {
                                const input = e.target as HTMLInputElement;
                                input.showPicker && input.showPicker();
                            },
                        },
                    }}
                    sx={{
                        '& input': {
                            cursor: 'pointer',
                            color: formData.dateOfBirth ? 'inherit' : 'transparent',
                            userSelect: 'none',  // Prevents text selection
                        },
                        '& input::-webkit-calendar-picker-indicator': {
                            cursor: 'pointer',
                        },
                    }}
                />
            </Grid>
            <Grid size={{ sm: 12, md: 6 }}>
                <FormHelperText id="outlined-weight-helper-text" sx={{ fontWeight: 400, fontSize: '14px', color: '#2D3748' }}>Password</FormHelperText>
                <TextField
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={!!errors.password}
                    helperText={errors.password}
                    fullWidth
                />
            </Grid>
            <Grid size={{ sm: 12, md: 6 }}>
                <FormHelperText id="outlined-weight-helper-text" sx={{ fontWeight: 400, fontSize: '14px', color: '#2D3748' }}>Confirm Password</FormHelperText>
                <TextField
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                    fullWidth
                />
            </Grid>
        </Grid>
    </>
);
