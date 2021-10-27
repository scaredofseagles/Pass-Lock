import { useState, useLayoutEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Signup from "./views/Signup";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";
import useStore from "./utils/store";
import API from "./utils/API";

import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import ForgotPassword from "./views/ForgotPassword";
import Landing from "./views/Landing";

function App() {
  const currentUser = useStore(state => state.currentUser);
  const { setCurrentUser } = useStore();

  useLayoutEffect(() => {
    if (!currentUser) checkSession();
  }, []);

  const checkSession = async () => {
    let result = await API.getCurrentSession();
    if (result.data.success) {
      setCurrentUser(result.data.response);
    }
  };

  return (
    <ChakraProvider>
      <Switch>
        <PrivateRoute path="/home" component={Dashboard} />

        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgotpassword" component={ForgotPassword} />

        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
