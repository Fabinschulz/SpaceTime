import { Button as ButtonUI, ButtonProps, Typography } from "@material-ui/core";

export default function Button({ children, ...props }: ButtonProps) {

	return (
		<ButtonUI
			fullWidth
			{...props}
		>
			<Typography style={{ textTransform: 'none' }} component="span" variant="subtitle1" >{children}</Typography>
		</ButtonUI>
	);
}

Button.defaultProps = {
	disabled: false,
	variant: 'contained',
	color: 'primary',
	size: 'large'
};