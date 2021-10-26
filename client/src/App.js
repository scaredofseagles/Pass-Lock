import { useState, useLayoutEffect, useReducer } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Signup from "./views/Signup";
import { Container } from "react-bootstrap";
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
import Landing from "./views/Landing";
import HeaderBar from "./components/HeaderBar";

function App() {
  const currentUser = useStore(state => state.currentUser);
  const { setCurrentUser } = useStore();

  const [data, setData] = useState(false);

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
        <div>
          <HeaderBar updateData={() => setData(!data)} />
          <PrivateRoute
            exact
            path="/"
            component={Dashboard}
            accountData={data}
          />
          <PrivateRoute exact path="/newpage" component={NewPage} />
        </div>

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
