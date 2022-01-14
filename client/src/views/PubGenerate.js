import { useState, useRef } from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Textarea,
  Button,
  Stack,
  HStack,
  Checkbox,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Link
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { FaClipboard } from "react-icons/fa";
import "../CSS/pub-generate.css";

export default function PubGenerate({ open, onClose }) {
  const [range, setRange] = useState(10);
  const [password, setPassword] = useState("");

  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePass = () => {
    const isLength = range;
    let finalCharSet = "";

    if (uppercase) finalCharSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) finalCharSet += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) finalCharSet += "1234567890";
    if (symbols) finalCharSet += "!@#$%?&*";

    let finalPass = "";

    if (finalCharSet.length < 1) return;

    for (let i = 0; i < isLength; i++) {
      let randomInt = Math.floor(Math.random() * finalCharSet.length);
      finalPass += finalCharSet[randomInt];
    }

    setPassword(finalPass);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    generatePass();
  };

  const handleChange = newValue => {
    setRange(newValue);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <Box bg="gray.700" mb="auto" py="1em" color="gray.300">
        <Center>
          <Link as={ReachLink} to="/signup" mx="5px">
            Sign Up
          </Link>
          or
          <Link as={ReachLink} to="/login" mx="5px">
            Log In
          </Link>
          to Save Your Passwords!
        </Center>
      </Box>
      <Box m="10%" h="68vh">
        <Center>
          <Heading>Generate A Password</Heading>
        </Center>
        <Text fontSize="xl">Select all that apply</Text>
        <Stack mt="1em" ml="1.5em" mb="1.5em">
          <Checkbox
            value={uppercase}
            onChange={e => setUppercase(e.target.checked)}
            colorScheme="yellow"
            aria-label="Uppercase Letters"
            name="uppercase"
          >
            Uppercase Letters
          </Checkbox>
          <Checkbox
            value={lowercase}
            onChange={e => setLowercase(e.target.checked)}
            colorScheme="yellow"
            aria-label="Lowercase Letters"
            name="lowercase"
            defaultIsChecked
          >
            Lowercase Letters
          </Checkbox>
          <Checkbox
            value={numbers}
            onChange={e => setNumbers(e.target.checked)}
            colorScheme="yellow"
            aria-label="Numbers"
            name="numbers"
          >
            Numbers
          </Checkbox>
          <Checkbox
            value={symbols}
            onChange={e => setSymbols(e.target.checked)}
            colorScheme="yellow"
            aria-label="Symbols"
            name="symbols"
          >
            Symbols
          </Checkbox>
        </Stack>
        <Text fontSize="xl" mb="1em">
          Password Length
        </Text>
        <Slider
          aria-label="password-length-slider"
          value={range}
          onChange={handleChange}
          max={40}
        >
          <SliderTrack bg="gray.200">
            <SliderFilledTrack bg="yellow.400" />
          </SliderTrack>

          <SliderThumb bg="yellow.500" />
        </Slider>

        <Text color="gray.600">Length: {range}</Text>

        <Button
          onClick={handleFormSubmit}
          bg="yellow.400"
          color="white"
          _hover={{ bg: "yellow.500" }}
        >
          Generate
        </Button>

        <PasswordDisplay password={password} redo={generatePass} />
      </Box>

      <Box bg="gray.700" mt="auto" py="1em" color="gray.300">
        <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
          <li>
            © 2020{" "}
            <a
              className="footer"
              href="https://daileykaze.ca"
              target="_blank"
              rel="noreferrer"
            >
              Dailey Kaze
            </a>
          </li>
          <li>
            <Link as={ReachLink} to="/terms-of-service">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link as={ReachLink} to="/private-policy">
              Private Policy
            </Link>
          </li>
        </ul>
      </Box>
    </div>
  );
}

const PasswordDisplay = props => {
  const passwordRef = useRef(null);
  const [copyStatus, setCopyStatus] = useState("");

  const copyToClipboard = event => {
    try {
      passwordRef.current.select();
      document.execCommand("copy");
      event.target.focus();
      setCopyStatus("Copied!");
    } catch (err) {
      setCopyStatus("Something went wrong");
    }
  };

  return (
    <Box my="1em">
      <Textarea
        placeholder="Your Password Will Be Shown Here"
        isReadOnly={true}
        value={props.password}
        ref={passwordRef}
      />
      <HStack my="1em" style={{ float: "right" }}>
        <Button
          onClick={() => {
            props.redo();
            setCopyStatus("");
          }}
          isDisabled={!props.password}
        >
          Redo
        </Button>
        <Button
          leftIcon={<FaClipboard />}
          onClick={copyToClipboard}
          isDisabled={!props.password}
          bg={copyStatus ? "green.400" : "gray.100"}
          color={copyStatus ? "white" : "black"}
          _hover={{ bg: copyStatus ? "green.500" : "gray.200" }}
        >
          {copyStatus ? "Copied" : "Copy"}
        </Button>
      </HStack>
    </Box>
  );
};
