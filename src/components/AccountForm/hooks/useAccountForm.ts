import { useState } from 'react';
import { toast } from 'react-toastify';
import { FormData, FormErrors } from '../types';
import { useAccountContext } from '../../../context/Accountcontext.tsx'
import { useNavigate } from 'react-router-dom';

export const useAccountForm = () => {
    const navigate = useNavigate();
    const context = useAccountContext();
    const [formData, setFormData] = useState<FormData>(context?.accountData || {
        firstName: '',
        lastName: '',
        emailOrPhone: '',
        password: '',
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
        if (!formData.firstName) tempErrors.firstName = 'First name is required';
        if (!formData.lastName) tempErrors.lastName = 'Last name is required';
        if (!formData.emailOrPhone || !validateEmailOrPhone(formData.emailOrPhone)) {
            tempErrors.emailOrPhone = 'Please enter a valid email or phone number';
        }
        if (!formData.password) tempErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = 'Passwords must match';
        if (!formData.termsAccepted) tempErrors.termsAccepted = 'You must accept the terms and privacy policy';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        try {
            context?.setAccountData(formData);
            toast.success('Account created successfully!');
            navigate('/login');
        } catch (error) {
            toast.error('An unexpected error occurred');
            setErrors(prevErrors => ({
                ...prevErrors,
                serverError: 'An unexpected error occurred'
            }));
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
