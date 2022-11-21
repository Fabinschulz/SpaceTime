import { FormHelperText, makeStyles, TextField as TextFieldUI, Typography } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { TextInputProps } from './type';

const useHelperTextStyles = makeStyles(() => ({
	root: {
		color: 'red'
	}
}));

function TextField({
	style = {},
	control,
	name,
	label,
	id,
	errors,
	value,
	type,
	rows,
	InputProps = { disableUnderline: true },
	required,
	InputLabelProps = { shrink: true, required: required },
	disabled,
	placeholder,
	onChange,
	margin = "normal",
	multiline = false,
	fieldAreaHeight = 30,
}: TextInputProps) {

	const helperTextStyles = useHelperTextStyles();
	return (
		<>
			<Controller
				render={({ field }) => (
					<>
						<Typography variant="subtitle2" component="div" style={{ color: "#5F5F5F", paddingBottom: 10 }}><strong>{required ? `${label} *` : label}</strong></Typography>
						<TextFieldUI
							{...field}
							FormHelperTextProps={{
								classes: {
									root: helperTextStyles.root
								}
							}}
							id={id}
							type={type}
							style={{
								backgroundColor: 'white',
								borderRadius: 10,
								height: fieldAreaHeight,
								padding: 10,
								marginTop: 0,
								marginBottom: 0,
								border: errors && errors.message ? '1px solid red' : '', ...style
							}}
							placeholder={placeholder}
							disabled={disabled}
							InputLabelProps={InputLabelProps}
							InputProps={InputProps}
							value={value ? value : (field.value === null ? '' : field.value)}
							{...(onChange && { onChange: onChange })}
							{...(value && { value })}
							fullWidth
							margin={margin}
							multiline={multiline}
							maxRows={rows}
						/>
						<FormHelperText classes={{ root: helperTextStyles.root }}>{errors && errors.message}</FormHelperText>
					</>)}
				control={control}
				name={name}
			/>
		</>);
};

export default TextField;