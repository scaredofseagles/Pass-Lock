import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Heading, Center } from "@chakra-ui/react";
import AccountCard from "../components/AccountCard";
import API from "../utils/API";
import useStore from "../utils/store";

export default function Dashboard({ accountData }) {
  const [accounts, setAccounts] = useState([]);
  const { currentUser } = useStore();

  useEffect(() => {
    getAccounts();
  }, [accountData]);

  async function getAccounts() {
    let result = await API.getAccts(currentUser.id);
    setAccounts(result.data);
  }

  return (
    <Container>
      <Center>
        <Heading mt="1em">Dashboard</Heading>
      </Center>
      {accounts.map(item => {
        return <AccountCard data={item} />;
      })}
    </Container>
  );
}
