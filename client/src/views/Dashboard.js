import { Box, Heading, Center, Button, Stack } from "@chakra-ui/react";
import AccountCard from "../Accounts/AccountCard";
import { useAccount } from "../Accounts/useAccount";
import useStore from "../utils/store";

export default function Dashboard() {
  const { accounts, getAccounts } = useAccount();
  const { setOpenAcct } = useStore();

  return (
    <Box px="10%" style={{ maxHeight: "90vh", overflowY: "auto" }}>
      <Center>
        <Heading mt="1em">Dashboard</Heading>
      </Center>
      {accounts.length ? (
        accounts.map(item => {
          return (
            <AccountCard
              key={item.id}
              data={item}
              update={() => getAccounts()}
            />
          );
        })
      ) : (
        <Box
          borderWidth="2px"
          borderColor="gray.200"
          my="10%"
          p="1em"
          borderRadius="5px"
        >
          <Center>
            <Stack spacing="2em">
              <Heading fontSize="2xl" color="gray.600">
                You have no Saved Accounts!
              </Heading>

              <Button
                bg="yellow.400"
                color="white"
                _hover={{ bg: "yellow.500" }}
                onClick={() => setOpenAcct(true)}
              >
                Add Account
              </Button>
            </Stack>
          </Center>
        </Box>
      )}
    </Box>
  );
}
