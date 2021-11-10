import { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import useStore from "./store";
import API from "./API";
import HeaderBar from "../components/HeaderBar";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = useStore(state => state.currentUser);
  const { setCurrentUser } = useStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      checkSession();
    } else setLoading(false);
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const checkSession = async () => {
    let result = await API.getCurrentSession();
    if (result.data.success) {
      setCurrentUser(result.data.response);
    }

    setLoading(false);
  };

  return loading ? (
    <Spinner color="yellow.400" />
  ) : (
    <Route
      {...rest}
      render={props => {
        return currentUser ? (
          <>
            <HeaderBar />
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
