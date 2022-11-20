import React from "react";

export type DatePickerProps = {
    name: string;
    control: any;
    errors?: { message: string | null },
    label: string;
    required?: boolean;
    id: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disableFuture?: boolean;
    disablePast?: boolean;
    variant?: "inline" | "dialog" | "static";
    fullWidth?: boolean;
    InputLabelProps: any;
    style?: any;
};