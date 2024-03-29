import { ChakraProvider } from "@chakra-ui/react";
import Signup from "./Auth/Signup";
import { Switch, Route, Redirect } from "react-router-dom";
import AcctProvider from "./Accounts/useAccount";

import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./views/Dashboard";
import Login from "./Auth/Login";
import ForgotPassword from "./Auth/ForgotPassword";
import Landing from "./views/Landing";
import SearchPage from "./Search/SearchPage";

const App = () => {
  return (
    <ChakraProvider>
      <AcctProvider>
        <Switch>
          <PrivateRoute path="/home" component={Dashboard} />
          <PrivateRoute path="/search" component={SearchPage} />

          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgotpassword" component={ForgotPassword} />

          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
      </AcctProvider>
    </ChakraProvider>
  );
};

export default App;
