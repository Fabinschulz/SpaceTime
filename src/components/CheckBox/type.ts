import React from 'react';

export type CheckBoxProps = {
    id: string;
    name: string;
    label: string;
    control: any;
    errors?: { message: string | null },
    required?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};