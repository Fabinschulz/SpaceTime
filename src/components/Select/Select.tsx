import { FormHelperText, Input, makeStyles, MenuItem, Select as SelectUI, TextField, Typography } from "@material-ui/core";
import { Controller } from "react-hook-form";
import { SelectType } from "./type";

const useHelperTextStyles = makeStyles(() => ({
	root: {
		color: 'red'
	},
}));

const useStyles = makeStyles((theme) => ({
	selectRoot: {
		"&:focus": {
			backgroundColor: "white"
		}
	},
}));

const SelectPlaceholder = ({ placeholder, disabled = false }: { placeholder: string, disabled?: boolean }) => {
	return <Input
		disabled={disabled}
		fullWidth
		disableUnderline={true}
		placeholder={placeholder}
	/>;
};

function Select({ options, control, required = false, loading = false, disabled = false, label, id, name = "", errors, value = null, onChange = () => { }, defaultValue }: SelectType) {

	const classes = useStyles();
	const helperTextStyles = useHelperTextStyles();

	return (
		<Controller
			render={({ field }) => {

				let composedOnChange = field.onChange;

				if (onChange) {
					composedOnChange = (...args) => {
						// @ts-ignore
						onChange(...args);
						field.onChange(...args);
					};
				}
				return (
					<>
						{label && <Typography variant="subtitle2" component="div" style={{ color: "#5F5F5F", paddingBottom: 10 }}><strong>{required ? `${label} *` : label}</strong></Typography>}
						<SelectUI
							{...field}
							id={id}
							fullWidth
							name={name}
							displayEmpty
							renderValue={(selected, ...rest) => {
								const isSelected = selected != null && selected !== '';
								if (isSelected && options) {
									var optionsForValue = options.filter(f => f.value == selected);
									if (optionsForValue.length) {
										return <>{optionsForValue[0].name}</>;
									} else {
										return <em>Selecione novamente</em>;
									}
								}
								if (loading) {
									return <SelectPlaceholder disabled={true} placeholder="Carregando..." />;
								}
								if (disabled) {
									return <></>;
								}
								if (!disabled && !isSelected && options?.length) {
									return <em>Selecione</em>;
								}
								if (!isSelected && !options?.length) {
									return <SelectPlaceholder disabled={true} placeholder="Nenhuma opção encontrada" />;
								}
								return <></>;
							}}
							disabled={disabled}
							value={value ? value : (field.value === undefined || field.value === null) ? "" : field.value}
							defaultValue={defaultValue}
							//component={TextField}
							disableUnderline
							style={{ backgroundColor: 'white', borderRadius: 10, height: 48, padding: 10, border: errors && errors.message ? '1px solid red' : '' }}
							classes={{ root: classes.selectRoot }}
							onChange={composedOnChange}
						>
							{options && options.map((field: { name: string, value: string }) => (
								<MenuItem key={field.value} value={field.value}>{field.name}</MenuItem>
							))}
							{options && options.length == 0 && <MenuItem disabled key="" value="">Nenhuma opção encontrada</MenuItem>}
						</SelectUI>
						<FormHelperText classes={{ root: helperTextStyles.root }}>{errors && errors?.message}</FormHelperText>
					</>);
			}}
			control={control}
			name={name}
		/>);
};

export default Select;
