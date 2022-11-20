import { Modal, Grid, Typography } from '@material-ui/core';
import Button from '../Button/Button';
import useStyles from './styles/style.modules';
import { ModalProps } from './type';

const ModalComponent = ({ open, onClose, title, subtitle, props, onClick = () => { }, buttonText, disabled, enableButton = true }: ModalProps) => {
	const classes = useStyles();

	return (
		<Modal
			open={open}
			onClose={onClose}>
			<div className={classes.paper}>
				<button className='uk-modal-close-default disablePrint' type='button' onClick={onClose} data-uk-close></button>
				<Grid container spacing={10}>
					<Grid item xs={12}>
						<div className={classes.header}>
							<Typography variant="h4" style={{ color: "#5F5F5F", fontFamily: 'Arial', }}>{title}</Typography>
							{subtitle && <Typography component="h6" style={{ color: "#5F5F5F", fontFamily: 'sans-serif', }}>{subtitle}</Typography>}
						</div>
					</Grid>
					<Grid item xs={12}>
						<div className={classes.body}>
							{props}
							<br />
							{enableButton &&
                                <Grid container justifyContent='center' spacing={5}>
                                	<Grid item xs={8}>
                                		<Button
                                			disabled={disabled}
                                			variant="contained"
                                			color="primary"
                                			onClick={() => onClick()}
                                			children={buttonText}
                                		/>
                                	</Grid>
                                </Grid>}
						</div>
					</Grid>
				</Grid>
			</div>
		</Modal >
	);
};

export default ModalComponent;