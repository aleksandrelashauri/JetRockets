import React from 'react';
import { Box } from '@mui/material';
import { useLogInForm } from './hooks/useLogInForm.tsx';
import { Header } from './components/Header.tsx';
import { FormFields } from './components/FormFields.tsx';
import { StoreButtons } from './components/StoreButtons.tsx';

const AccountForm = () => {
    const { formData, errors, handleSubmit, handleChange } = useLogInForm();
    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                padding: '3rem',
                paddingLeft: '8rem',
                paddingRight: '3rem'
            }}
        >
            <Header />
            <FormFields
                formData={formData}
                errors={errors}
                handleChange={handleChange}
            />
            <StoreButtons
                formData={formData}
                errors={errors}
                handleChange={handleChange}
            />
        </Box>
    );
};

export default AccountForm; 