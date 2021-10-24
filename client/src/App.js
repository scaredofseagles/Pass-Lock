import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Signup from "./views/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";
import useStore from "./utils/store";
import API from "./utils/API";

import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import ForgotPassword from "./views/ForgotPassword";
import NewPage from "./views/NewPage";
import AddAccount from "./views/AddAccount";
import Generate from "./views/Generate";
import Landing from "./views/Landing";

function App() {
  const currentUser = useStore(state => state.currentUser);
  const { setCurrentUser } = useStore();

  const history = useHistory();

  useEffect(() => {
    if (!currentUser) checkSession();
  }, []);

  const checkSession = async () => {
    let result = await API.getCurrentSession();
    if (result.data.success) {
      setCurrentUser(result.data.response);
      history.push("/");
    }
  };

  return (
    <ChakraProvider>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/newpage" component={NewPage} />
        <PrivateRoute exact path="/add" component={AddAccount} />
        <PrivateRoute exact path="/generate" component={Generate} />
        <Route path="/home" component={Landing} />
        <Container
          fluid
          className="d-flex align-items-center justify-content-center css-selector"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgotpassword" component={ForgotPassword} />
          </div>
        </Container>
      </Switch>
    </ChakraProvider>
  );
}

export default App;
