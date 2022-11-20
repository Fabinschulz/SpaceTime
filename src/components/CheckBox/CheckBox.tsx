import { Checkbox as CheckboxUI, FormHelperText, InputLabel, makeStyles } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { CheckBoxProps } from './type';

const useHelperTextStyles = makeStyles(() => ({
	root: {
		color: 'red'
	}
}));

function CheckBox({ name, control, errors, label, required, id, disabled, onChange }: CheckBoxProps) {

	const helperTextStyles = useHelperTextStyles();
	return (

		<Controller
			render={({ field }) => (
				<>
					<InputLabel htmlFor={id} id={`${id}-label`} shrink>{required ? `${label} *` : label}</InputLabel>
					<CheckboxUI
						{...field}
						id={id}
						required={required}
						disabled={disabled}
						color="default"
						inputProps={{ 'aria-label': 'secondary checkbox' }}
						{...(onChange && { onChange: onChange })}
						checked={field.value}
					/>
					<FormHelperText classes={{ root: helperTextStyles.root }}>{errors && errors.message}</FormHelperText>
				</>)}
			control={control}
			name={name}
		/>);
};

export default CheckBox;