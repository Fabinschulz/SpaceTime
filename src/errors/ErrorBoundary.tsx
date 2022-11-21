import { Alert } from '@material-ui/lab';

function FallBack(props: any){ 
	
	return (
		<Alert severity="warning" >Ocorreu um erro inesperado ao obter os dados. Tente novamente mais tarde.</Alert>
	);
};

export default FallBack;