import {
  Box,
  Heading,
  HStack,
  Link,
  Stack,
  Center,
  Image,
  Button
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

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
              src="./android-chrome-192x192.png"
              boxSize="192px"
              alt="icon"
            />
            <Stack spacing={0} pl="2em">
              <Heading style={{ fontSize: "62pt" }} color="#fca223">
                Pass
              </Heading>
              <Heading style={{ fontSize: "62pt" }}>Lock</Heading>
              <Button
                mt="3em"
                bg="gray.300"
                _hover={{ bg: "#fca223", color: "white" }}
              >
                Try Now
              </Button>
            </Stack>
          </div>
        </Box>
      </Box>
      <Box bg="gray.300" w="100vw" h="90vh">
        <Center>
          <Heading color="gray.700" pt="1em" size="2xl">
            All your Accounts in One Place
          </Heading>
        </Center>
        <p>show little boxes of website previews</p>
        <p>and maybe a few testimonials</p>
      </Box>
    </>
  );
}
