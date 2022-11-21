import { Button, Box, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TextField from '../../../components/TextField/TextField';
import { FieldValues, useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema, defaultValues } from "./Schema/validation";

export function LoginForm() {
	const { handleSubmit, setValue, getValues, control } = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: defaultValues
	});
	const { errors } = useFormState({ control });

	const onSubmit = (data: FieldValues) => {
		console.log(data);
	};

	const onErrors = (errors: FieldValues) => {
		console.log(errors);
	};

	return (
		<div style={{ marginTop: 20 }} >
			<form
				onSubmit={handleSubmit(onSubmit, onErrors)}
			>
				<Box py={3}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<TextField
								errors={errors.email}
								control={control}
								id="email"
								name="email"
								label="E-mail"
								type="email"
								placeholder="Digite seu e-mail"
								required
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								errors={errors.password}
								control={control}
								id="password"
								name="password"
								label="Senha"
								type="password"
								variant="outlined"
								placeholder="Digite sua senha"
								required
								fullWidth
							/>
						</Grid>
					</Grid>
				</Box>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Button type="submit" variant="contained" color="primary" style={{ backgroundColor: "#8A2BE2" }} fullWidth>
							<Typography component="span" variant="subtitle2" >Acessar</Typography>
						</Button>
					</Grid>
				</Grid>
				<Box p={2}>
					<Link to='/' style={{ textDecoration: "none", color: '#1e87f0' }}>
						Esqueceu sua senha?
					</Link>
				</Box>
				<br />
			</form>
		</ div>
	);
}

export default LoginForm;