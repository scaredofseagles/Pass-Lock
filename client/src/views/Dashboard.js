import { useState, useEffect } from "react";
import HeaderBar from "../components/HeaderBar";
import { Container } from "react-bootstrap";
import AccountCard from "../components/AccountCard";
import API from "../utils/API";
import useStore from "../utils/store";

export default function Dashboard() {
  const [accounts, setAccounts] = useState([]);
  const { currentUser } = useStore();

  useEffect(() => {
    console.log(currentUser);
    getAccounts();
  }, []);

  async function getAccounts() {
    let result = await API.getAccts(currentUser.id);
    setAccounts(result.data);
  }

  return (
    <>
      <HeaderBar />
      <Container>
        <h1 className="text-center mt-3">Dashboard</h1>
        {accounts.map(item => {
          return <AccountCard data={item} />;
        })}
      </Container>
    </>
  );
}
