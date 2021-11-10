import { Box, Heading, Center } from "@chakra-ui/react";
import HeaderBar from "../components/HeaderBar";
import AccountCard from "../components/AccountCard";
import API from "../utils/API";
import useStore from "../utils/store";
import useAccount from "../utils/useAccount";

export default function Dashboard() {
  const { accounts, updateAccount } = useAccount();

  // TODO: when they are no accounts, add a "click here to get started" button

  return (
    <>
      <HeaderBar update={updateAccount} />
      <Box px="10%" style={{ maxHeight: "90vh", overflowY: "auto" }}>
        <Center>
          <Heading mt="1em">Dashboard</Heading>
        </Center>
        {accounts.map(item => {
          return (
            <AccountCard key={item.id} data={item} update={updateAccount} />
          );
        })}
      </Box>
    </>
  );
}
