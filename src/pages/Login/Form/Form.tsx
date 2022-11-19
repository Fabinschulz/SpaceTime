import React from 'react';
import { TextField, Button, FormLabel, Box, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

export function LoginForm() {
	return (
		<form
			onSubmit={() => { }}>
			<Box py={3}>
				<Grid item>
					<FormLabel><b>Email</b></FormLabel>
					<TextField id="login" variant="outlined" margin="normal" fullWidth />
				</Grid>
				<br />
				<Grid item>
					<FormLabel><b>Senha</b></FormLabel>
					<TextField id="password" variant="outlined" margin="normal" fullWidth />
				</Grid>
			</Box>

			<Grid item>
				<Button type="submit" variant="contained" color="primary" style={{ backgroundColor: "#8A2BE2" }} fullWidth>
					<Typography component="span" variant="subtitle2" >Acessar</Typography>
				</Button>
			</Grid>

			<Box p={2}>
				<Link to='/' style={{ textDecoration: "none", color: '#1e87f0' }}>
                    Esqueceu sua senha?
				</Link>
			</Box>
		</form>
	);
}

export default LoginForm;