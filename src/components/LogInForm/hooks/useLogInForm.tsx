import { useState } from 'react';
import { FormData, FormErrors } from '../../../components/AccountForm/types';

export const useLogInForm = () => {
    const [formData, setFormData] = useState<FormData>({
        emailOrPhone: '',
        password: '',
        firstName: '',
        lastName: '',
        confirmPassword: '',
        dateOfBirth: '',
        rememberMe: false,
        termsAccepted: false,
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const validateEmailOrPhone = (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
    };

    const validateForm = () => {
        let tempErrors: FormErrors = {};
        if (!formData.emailOrPhone || !validateEmailOrPhone(formData.emailOrPhone)) {
            tempErrors.emailOrPhone = 'Please enter a valid email or phone number';
        }
        if (!formData.password) {
            tempErrors.password = 'Password is required';
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return {
        formData,
        errors,
        handleSubmit,
        handleChange,
    };
};
