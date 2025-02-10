import React from 'react';
import { Box } from '@mui/material';
import { Header } from './components/Header.tsx';
import { FormFields } from './components/FormFields.tsx';
import { FormActions } from './components/formActions.tsx';
import { StoreButtons } from './components/StoreButtons.tsx';
import { useAccountForm } from './hooks/useAccountForm.ts';

const AccountForm = () => {
    const { formData, errors, handleSubmit, handleChange } = useAccountForm();

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                height: '100%',
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
            <FormActions
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