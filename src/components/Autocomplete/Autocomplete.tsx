import React, { useCallback, useEffect, useState } from "react";
import { FormHelperText, makeStyles, TextField, Typography } from "@material-ui/core";
import { Autocomplete as AutocompleteUI } from "@material-ui/lab";
import { AutoCompleteLocalProps } from "./type";
import debounce from "../../helper/debounce";
import CircularProgress from '@material-ui/core/CircularProgress';

const useHelperTextStyles = makeStyles(() => ({
	root: {
		color: 'red'
	}
}));

function Autocomplete({
	id,
	options,
	errors,
	params,
	fetch,
	onChange,
	defaultValue,
	required,
	label,
	loading

}: AutoCompleteLocalProps) {

	const helperTextStyles = useHelperTextStyles();
	const [searchField, setSearchField] = useState("");
	const { page, size } = params;

	const verify = useCallback(
		debounce((name: string) => {
			fetch(page, size, name);
		}, 500),
		[]
	);

	useEffect(() => {
		fetch(page, size);
	}, []);

	useEffect(() => {
		verify(searchField);
	}, [searchField]);

	return (
		<>
			{/*@ts-ignore */}
			<Typography variant="subtitle2" component="div" htmlFor={id} shrink required={true} style={{ color: "#5F5F5F", paddingBottom: 10 }}>
				<strong>{required ? `${label} *` : label}</strong>
			</Typography>
			<AutocompleteUI
				noOptionsText={"Nenhum registro foi encontrado."}
				options={options}
				id={id}
				fullWidth
				defaultValue={defaultValue}
				getOptionSelected={(props) => {
					return props.id;
				}}
				getOptionLabel={(option) => {
					return option.name ?? "";
				}}
				loading={loading}
				renderInput={(params) => (
					<TextField
						{...params}
						InputProps={{
							...params.InputProps,
							disableUnderline: true,
							style: {
								backgroundColor: '#FFFF',
								borderRadius: 10,
								height: 48,
								paddingLeft: 10,
								borderBottom: 0,
								border: errors && errors.message ? '1px solid red' : ''
							},
							endAdornment: (
								<React.Fragment>
									{loading ? <CircularProgress color="inherit" size={20} /> : null}
									{params.InputProps.endAdornment}
								</React.Fragment>
							),
							onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
								setSearchField(event?.currentTarget?.value);
							},
						}}
					/>
				)}
				disablePortal={true}
				onChange={onChange}
			/>
			<FormHelperText classes={{ root: helperTextStyles.root }}>{errors && errors.message}</FormHelperText>
		</>
	);

}

export default Autocomplete;