export type AutoCompleteLocalProps = {
    id: string;
    options: any[];
    params: any;
    fetch: any;
    onChange: any;
    defaultValue?: any;
    errors?: { message: string | null },
    required?: boolean;
    label: string;
    loading?: boolean;
}