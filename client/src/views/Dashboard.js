import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Heading, Center } from "@chakra-ui/react";
import HeaderBar from "../components/HeaderBar";
import AccountCard from "../components/AccountCard";
import API from "../utils/API";
import useStore from "../utils/store";

export default function Dashboard() {
  const [accounts, setAccounts] = useState([]);
  const [updateData, setUpdateData] = useState(false);
  const { currentUser } = useStore();

  useEffect(() => {
    getAccounts();
  }, [updateData]);

  async function getAccounts() {
    let result = await API.getAccts(currentUser.id);
    setAccounts(result.data.response);
  }

  // TODO: when they are no accounts, add a "click here to get started" button

  return (
    <>
      <HeaderBar update={() => setUpdateData(!updateData)} />
      <Container>
        <Center>
          <Heading mt="1em">Dashboard</Heading>
        </Center>
        {accounts.map(item => {
          return (
            <AccountCard
              data={item}
              update={() => setUpdateData(!updateData)}
            />
          );
        })}
      </Container>
    </>
  );
}
