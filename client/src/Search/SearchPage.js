import { useState, useEffect } from "react";
import { Box, Heading, Center } from "@chakra-ui/react";
import HeaderBar from "../components/HeaderBar";
import AccountCard from "../components/AccountCard";
import queryString from "query-string";
import useAccount from "../utils/useAccount";

const SearchPage = () => {
  const { accounts, updateAccount } = useAccount();
  const [searchAcct, setSearchAcct] = useState([]);

  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    searchAccounts(parsed.q);
  }, [window.location.search, accounts]);

  const searchAccounts = value => {
    console.log(value, accounts);
    setSearchAcct(
      accounts.filter(
        item => item.url.includes(value) || item.username.includes(value)
      )
    );
  };

  return (
    <>
      <HeaderBar update={updateAccount} />
      <Box p="10%">
        <Center>
          <Heading>Search Results</Heading>
        </Center>

        {searchAcct.length ? (
          searchAcct.map(item => {
            return (
              <AccountCard key={item.id} data={item} update={updateAccount} />
            );
          })
        ) : (
          <Center mt="20%">
            <Heading fontSize="2xl" color="gray.600">
              No Accounts Match Your Search 😔
            </Heading>
          </Center>
        )}
      </Box>
    </>
  );
};

export default SearchPage;
