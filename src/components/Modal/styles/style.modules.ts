import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	paper: {
		top: `50%`,
		left: `50%`,
		transform: `translate(-50%, -50%)`,
		position: "absolute",
		display: "flex",
		flexWrap: "wrap",
		height: "auto",
		maxWidth: "570px",
		backgroundColor: "#F5F5F5",
		boxShadow: theme.shadows[6],
		padding: theme.spacing(5, 6, 3),
		borderRadius: "10px",
	},
	body: {
		maxWidth: "100%",
		margin: "0 auto",
		marginBottom: "60px",
	},
	header: {
		marginTop: "-25px",
		padding: theme.spacing(0, 1, 1),
		textAlign: 'left',
		color: theme.palette.text.secondary,
		borderBottom: '3px solid #e9ecef',
		borderTopLeftRadius: '0.3rem',
		borderTopRightRadius: '0.3rem'
	},
	span: {
		fontWeight: 700,
		textAlign: 'center',
		fontSize: 20
	},
	typography: {
		textAlign: 'center',
		color: "#5F5F5F",
		fontFamily: 'sans-serif',
		fontSize: 15
	},
}));

export default useStyles;
