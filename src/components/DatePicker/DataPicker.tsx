import { FormHelperText, makeStyles, Typography } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { Controller } from "react-hook-form";
import { DatePickerProps } from "./type";

const useHelperTextStyles = makeStyles(() => ({
	root: {
		color: 'red'
	}
}));

function DatePicker({
	style = {},
	control,
	label,
	id,
	variant,
	name,
	disabled,
	errors,
	required,
	disableFuture,
	disablePast,
	fullWidth,
	InputLabelProps }: DatePickerProps) {

	const helperTextStyles = useHelperTextStyles();

	return (
		<Controller
			render={({ field }) => (
				<>
					<Typography variant="subtitle2" component="div" style={{ color: "#5F5F5F", paddingBottom: 10 }}><strong>{required ? `${label} *` : label}</strong></Typography>
					<KeyboardDatePicker
						{...field}
						id={id}
						fullWidth={fullWidth}
						format="dd/mm/yyyy"
						placeholder="dd/mm/aaaa"
						variant={variant}
						disableFuture={disableFuture}
						disablePast={disablePast}
						disabled={disabled}
						InputLabelProps={InputLabelProps}
						InputProps={{
							disableUnderline: true
						}}
						helperText={false}
						style={{ backgroundColor: 'white', borderRadius: 10, height: 48, padding: 10, border: errors && errors.message ? '1px solid red' : '', ...style }}
					/>
					{errors && <FormHelperText classes={{ root: helperTextStyles.root }}>{errors.message}</FormHelperText>}
				</>)}
			control={control}
			name={name}
		/>);
};

export default DatePicker;