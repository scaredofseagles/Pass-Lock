import { useState, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputLeftElement,
  IconButton,
  Text,
  Input,
  Button,
  Alert,
  AlertIcon,
  Stack,
  Checkbox,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} from "@chakra-ui/react";
import { FaClipboard } from "react-icons/fa";

export default function Generate({ open, onClose }) {
  const [show, setShow] = useState(false);
  const [range, setRange] = useState(10);
  const [password, setPassword] = useState("");

  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const [error, setError] = useState("");

  const generatePass = () => {
    const isLength = range;
    let finalCharSet = "";

    if (uppercase) finalCharSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) finalCharSet += "abcdefghijklmnopqrstuvwxyz";
    if (symbols) finalCharSet += "1234567890";
    if (numbers) finalCharSet += "!@#$%?&*";

    let finalPass = "";

    for (let i = 0; i < isLength; i++) {
      let randomInt = Math.floor(Math.random() * finalCharSet.length);
      finalPass += finalCharSet[randomInt];
    }

    setPassword(finalPass);
    displayPassword(finalPass);
  };

  const displayPassword = finalPass => {
    if (finalPass.length > 1) {
      handleShow();
    } else {
      setError("Something went wrong");
    }
  };

  // modal handling functions
  const handleClose = item => {
    if (item) {
      setShow(false);
      onClose();
    }

    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleFormSubmit = event => {
    event.preventDefault();

    generatePass();
  };

  const handleChange = newValue => {
    console.log(newValue);
    setRange(newValue);
  };
  return (
    <>
      <Modal isOpen={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Generate A Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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

            {error && (
              <Alert status="error">
                <AlertIcon />
                {error}
              </Alert>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={handleFormSubmit}
              bg="yellow.400"
              color="white"
              _hover={{ bg: "yellow.500" }}
            >
              Generate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Example
        handleShow={handleShow}
        handleClose={handleClose}
        show={show}
        password={password}
      />
    </>
  );
}

const Example = props => {
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
    <>
      <Modal
        isOpen={props.show}
        onClose={() => {
          props.handleClose();
          setCopyStatus("");
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Generated Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Your password is: </Text>
            <InputGroup className="mb-3">
              <Input
                value={props.password}
                ref={passwordRef}
                className="text-center"
                variant="filled"
                isReadOnly
              />
              <InputLeftElement>
                <IconButton
                  onClick={copyToClipboard}
                  variant="solid"
                  icon={<FaClipboard />}
                />
              </InputLeftElement>
            </InputGroup>
          </ModalBody>
          {copyStatus && (
            <Alert
              status={copyStatus === "Copied!" ? "success" : "error"}
              w="90%"
              style={{ margin: "0 1.5em" }}
            >
              <AlertIcon />
              {copyStatus}
            </Alert>
          )}
          <ModalFooter>
            <Button
              mr="1em"
              bg="yellow.400"
              color="white"
              _hover={{ bg: "yellow.500" }}
              onClick={() => {
                props.handleClose();
                setCopyStatus("");
              }}
            >
              Generate Again
            </Button>
            <Button
              onClick={() => {
                props.handleClose(true);
                setCopyStatus("");
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
