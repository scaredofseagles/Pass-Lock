import { useState, useEffect } from "react";
import { Box, Heading, Center } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import HeaderBar from "../components/HeaderBar";
import AccountCard from "../Accounts/AccountCard";
import queryString from "query-string";
import { useAccount } from "../Accounts/useAccount";

const SearchPage = () => {
  const { accounts, getAccounts } = useAccount();
  const [searchAcct, setSearchAcct] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    searchAccounts(parsed.q);
  }, [window.location.search, accounts]); //eslint-disable-line react-hooks/exhaustive-deps

  const searchAccounts = value => {
    setSearchAcct(
      accounts.filter(
        item => item.url.includes(value) || item.username.includes(value)
      )
    );
  };

  return (
    <>
      <Box px="10%" style={{ maxHeight: "90vh", overflowY: "auto" }}>
        <Center>
          <Heading mt="1em">Search Results</Heading>
        </Center>
        <div>
          {searchAcct.length ? (
            searchAcct.map(item => {
              return (
                <AccountCard key={item.id} data={item} update={getAccounts} />
              );
            })
          ) : (
            <Center mt="20%">
              <Heading fontSize="2xl" color="gray.600">
                No Accounts Match Your Search 😔
              </Heading>
            </Center>
          )}
        </div>
      </Box>
    </>
  );
};

export default SearchPage;
