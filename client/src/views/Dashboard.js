import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Heading, Center } from "@chakra-ui/react";
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
      <Container>
        <Center>
          <Heading mt="1em">Dashboard</Heading>
        </Center>
        {accounts.map(item => {
          return (
            <AccountCard key={item.id} data={item} update={updateAccount} />
          );
        })}
      </Container>
    </>
  );
}
