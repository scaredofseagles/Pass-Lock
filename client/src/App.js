import { ChakraProvider } from "@chakra-ui/react";
import Signup from "./views/Signup";
import { Switch, Route, Redirect } from "react-router-dom";
import AcctProvider from "./Accounts/useAccount";

import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import ForgotPassword from "./views/ForgotPassword";
import Landing from "./views/Landing";
import SearchPage from "./Search/SearchPage";
import HeaderBar from "./components/HeaderBar";

const App = () => {
  return (
    <ChakraProvider>
      <Switch>
        <AcctProvider>
          <HeaderBar />
          <PrivateRoute path="/home" component={Dashboard} />
          <PrivateRoute path="/search" component={SearchPage} />
        </AcctProvider>

        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgotpassword" component={ForgotPassword} />

        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </Switch>
    </ChakraProvider>
  );
};

export default App;
