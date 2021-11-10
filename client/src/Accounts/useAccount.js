import { useState, useEffect, createContext, useContext } from "react";
import API from "../utils/API";
import useStore from "../utils/store";

const AcctContext = createContext();

export const useAccount = () => useContext(AcctContext);

const AcctProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const currentUser = useStore(state => state.currentUser);

  useEffect(() => {
    if (currentUser && !accounts.length) getAccounts();
  }, [currentUser]); //eslint-disable-line react-hooks/exhaustive-deps

  const getAccounts = async () => {
    let result = await API.getAccts(currentUser.id);
    setAccounts(result.data.response);
  };

  const value = { accounts, getAccounts };

  return <AcctContext.Provider value={value}>{children}</AcctContext.Provider>;
};

export default AcctProvider;
