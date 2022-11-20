import { SelectProps } from "@material-ui/core";

export type SelectType = {
    label?: string;
    name: string;
    options: { name: string, value: string }[];
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    defaultValue?: string;
    control: any;
    rules?: any;
    onChange?: (value: string) => void;
    className?: string;
    variant?: 'standard' | 'outlined' | 'filled';
    fullWidth?: boolean;
    required?: boolean;
    size?: 'small' | 'medium';
    margin?: 'none' | 'dense' | 'normal';
    errors?: { message: string } | undefined;
    displayEmpty?: boolean;
    multiple?: boolean;
    loading?: boolean;
} & SelectProps;