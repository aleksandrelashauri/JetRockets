export interface FormData {
    firstName: string;
    lastName: string;
    emailOrPhone: string;
    password: string;
    confirmPassword: string;
    dateOfBirth: string;

    rememberMe: boolean;
    termsAccepted: boolean;
}

export interface FormErrors {
    firstName?: string;
    lastName?: string;
    emailOrPhone?: string;
    password?: string;
    confirmPassword?: string;
    dateOfBirth?: string;

    rememberMe?: string;
    termsAccepted?: string;
}

export type AccountFormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface AccountFormState {
    data: FormData;
    errors: FormErrors;
    status: AccountFormStatus;
    isDirty: boolean;

}
