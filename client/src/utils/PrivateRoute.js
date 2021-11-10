import { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import useStore from "./store";
import API from "./API";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = useStore(state => state.currentUser);
  const { setCurrentUser } = useStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      checkSession();
    } else setLoading(false);
  }, []);

  const checkSession = async () => {
    let result = await API.getCurrentSession();
    if (result.data.success) {
      setCurrentUser(result.data.response);
    }

    setLoading(false);
  };

  // TODO: add spinner for loading

  return loading ? (
    <p>Loading</p>
  ) : (
    <Route
      {...rest}
      render={props => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
