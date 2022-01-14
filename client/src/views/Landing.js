import {
  Box,
  Heading,
  HStack,
  Link,
  Stack,
  Center,
  Image,
  Button,
  ButtonGroup
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import {
  lockIcon,
  account1,
  account2,
  addAccount,
  generateAccount
} from "../assets";

import Footer from "../components/Footer";

export default function Landing() {
  return (
    <>
      <Box bg="gray.700" w="100vw" h="90vh">
        <Box>
          <HStack
            float="right"
            mr="1em"
            mt=".5em"
            spacing={10}
            color="gray.300"
          >
            <Link _hover={{ color: "#fca223" }} as={ReachLink} to="/signup">
              Sign Up
            </Link>
            <Link _hover={{ color: "#fca223" }} as={ReachLink} to="/login">
              Log In
            </Link>
          </HStack>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "30vh"
            }}
          >
            <Image
              objectFit="cover"
              src={lockIcon}
              boxSize="192px"
              alt="icon"
            />
            <Stack spacing={0} pl="2em">
              <Heading style={{ fontSize: "62pt" }} color="#fca223">
                Pass
              </Heading>
              <Heading style={{ fontSize: "62pt" }}>Lock</Heading>
            </Stack>
          </div>

          <Center>
            <ButtonGroup>
              <Button
                bg="gray.300"
                _hover={{ bg: "#fca223" }}
                as={ReachLink}
                to="/signup"
              >
                Try Now
              </Button>
              <Button
                bg="#fca223"
                _hover={{ bg: "gray.300" }}
                as={ReachLink}
                to="/generate"
              >
                Password Generator
              </Button>
            </ButtonGroup>
          </Center>
        </Box>
      </Box>
      <Box bg="gray.300" w="100vw">
        <Center>
          <Heading color="gray.700" pt="1em" size="2xl">
            All your Accounts in One Place
          </Heading>
        </Center>

        <Box p="10%">
          <Image src={account1} />

          <Image src={account2} my="2em" />

          <Stack>
            <Center>
              <Heading color="gray.700" p="1em">
                Store Passwords
              </Heading>

              <Image src={addAccount} my="2em" w="400px" objectFit="contain" />
            </Center>
          </Stack>

          <Stack>
            <Center>
              <Heading color="gray.700" p="1em">
                Generate Strong Passwords
              </Heading>

              <Image src={generateAccount} w="400px" objectFit="contain" />
            </Center>
          </Stack>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
