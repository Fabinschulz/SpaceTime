import { string, object, addMethod } from 'yup';

addMethod(string, 'email', function () {
	return this.test({
		name: 'email',
		message: 'E-mail não é válido.',
		test: (value) => {
			return value ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) : true;
		}
	});
});

export const validationSchema = object().shape({
	email: string().typeError('E-mail: Precisa ser preenchido.').required('E-mail: Precisa ser preenchido.').email(),
	password: string().typeError('Senha: Precisa ser preenchido.')
		.required('Senha: Precisa ser preenchido.').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			"A senha deve conter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas, caracteres especiais e número")
		.min(8, 'A senha é muito curta - deve ter no mínimo 8 caracteres.'),
});

export const defaultValues = {
	email: null,
	password: null
};