import { useLayoutEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import useStore from "./store";
import Login from "../views/Login";

const PrivateRoute = ({ component, ...rest }) => {
  const { currentUser } = useStore();

  const finalComponent = currentUser ? component : Login;

  return <Route {...rest} component={finalComponent} />;
};

export default PrivateRoute;
