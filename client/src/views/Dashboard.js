import { Box, Heading, Center } from "@chakra-ui/react";
import HeaderBar from "../components/HeaderBar";
import AccountCard from "../Accounts/AccountCard";
import API from "../utils/API";
import useStore from "../utils/store";
import { useAccount } from "../Accounts/useAccount";

export default function Dashboard() {
  const { accounts, getAccounts } = useAccount();

  // TODO: when they are no accounts, add a "click here to get started" button

  return (
    <>
      <Box px="10%" style={{ maxHeight: "90vh", overflowY: "auto" }}>
        <Center>
          <Heading mt="1em">Dashboard</Heading>
        </Center>
        {accounts.map(item => {
          return (
            <AccountCard
              key={item.id}
              data={item}
              update={() => getAccounts()}
            />
          );
        })}
      </Box>
    </>
  );
}
