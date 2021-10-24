import API from "./API";
import useStore from "./store";

const useAuth = () => {
  const { setCurrentUser } = useStore();
  // const currentUser = useStore(state => state.currentUser);

  const signUp = async ({ firstName, lastName, email, password }) => {
    const result = await API.addUser({
      firstName,
      lastName,
      email,
      password
    });

    if (result.data.success) {
      setCurrentUser(result.data.response);
      await API.addSession({ userid: result.data.response.id });
    }

    return result;
  };

  const login = async ({ email, password }) => {
    const result = await API.authorize({ email, password });

    if (result.data.success) {
      setCurrentUser(result.data.response);
      await API.addSession({ userid: result.data.response.id });
    }

    return result;
  };

  const logOut = async id => {
    await API.removeSession(id);
    setCurrentUser({});
  };

  const resetPassword = email => {
    //
  };

  return { signUp, login, logOut, resetPassword };
};

export default useAuth;
