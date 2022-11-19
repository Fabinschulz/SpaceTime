import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute(props) {

	return <Route {...props} />;
};
