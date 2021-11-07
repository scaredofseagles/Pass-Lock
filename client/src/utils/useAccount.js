import { useState, useEffect } from "react";
import API from "./API";
import useStore from "./store";

const useAccount = () => {
  const [accounts, setAccounts] = useState([]);
  const [update, setUpdate] = useState(false);
  const currentUser = useStore(state => state.currentUser);

  useEffect(() => {
    if (currentUser) getAccounts();
  }, [update]); //eslint-disable-line react-hooks/exhaustive-deps

  async function getAccounts() {
    let result = await API.getAccts(currentUser.id);
    setAccounts(result.data.response);
  }

  const updateAccount = () => setUpdate(!update);

  return { accounts, updateAccount };
};

export default useAccount;
