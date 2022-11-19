import React from 'react';
//import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Switch, Route } from 'react-router';
import SignIn from './pages/Login/SingIn/SingIn';
//import Cadastro from './pages/Cadastro/Cadastro';

function App() {

	return (
		<>
			<Helmet>
				<title> Spacetime- Backoffice</title>
			</Helmet>
			<Router>
				<Switch>
					<Route path='/login/:error' component={SignIn} />
					{/* <Route path='/login/cadastro' component={Cadastro} /> */}
					<Route path='/' component={SignIn} />
				</Switch>
			</Router>
		</>
	);
}

export default App;