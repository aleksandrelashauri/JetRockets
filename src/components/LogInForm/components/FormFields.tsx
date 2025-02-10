import { TextField, FormHelperText } from '@mui/material';
import { FormData, FormErrors } from '../../../components/AccountForm/types';
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
        </Grid>
    </>
);
