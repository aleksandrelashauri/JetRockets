import React, { createContext, useContext, useState } from 'react';
import { FormData } from '../components/AccountForm/types';

interface AccountContextType {
    accountData: FormData;
    setAccountData: (data: FormData) => void;
}

export const AccountContext = createContext<AccountContextType | null>(null);

export const AccountProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [accountData, setAccountData] = useState<FormData>({
        firstName: '',
        lastName: '',
        emailOrPhone: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
        rememberMe: false,
        termsAccepted: false,
    });

    return (
        <AccountContext.Provider value={{ accountData, setAccountData }}>
            {children}
        </AccountContext.Provider>
    );
};

export const useAccountContext = () => useContext(AccountContext);