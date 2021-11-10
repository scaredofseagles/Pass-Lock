import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputRightElement,
  IconButton,
  Text,
  Input,
  Button,
  Alert,
  AlertIcon,
  Stack
} from "@chakra-ui/react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import ErrorMessage from "../components/ErrorMessage";
import { encrypt } from "../utils/crypto";
import API from "../utils/API";
import useStore from "../utils/store";

export default function AddAccount({ open, onClose, updateData }) {
  const initialValues = {
    website: "",
    username: "",
    password: ""
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [close, setClosing] = useState(false);
  const { currentUser } = useStore();

  const handleChange = e => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  let validateFields = values => {
    let errors = {};

    if (!formValues.website) errors.website = "Must enter a URL";
    if (!formValues.username)
      errors.username = "Must enter a username or email";
    if (!formValues.password) errors.password = "Must enter a password";

    return errors;
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    setFormErrors(validateFields(formValues));

    if (!Object.keys(formErrors).length) {
      let hashedPass = await encrypt(formValues.password);

      if (hashedPass) {
        let newAcct = {
          website: formValues.website,
          username: formValues.username,
          password: hashedPass,
          user: currentUser.id
        };

        let result = await API.sendAcct(newAcct);
        if (result.data.success) {
          updateData();
          setClosing(true);
          setTimeout(() => {
            setClosing(false);
            onClose();
            setError("");
          }, 1500);
        } else setError(result.data.message);
      } else setError("Something went wrong. Please Try Again");
    }
  };

  return (
    <Modal isOpen={open} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Account</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={3} mt="1em">
            <InputGroup>
              <Text htmlFor="website" mr="3em">
                Website
              </Text>
              <Input
                placeholder="Paste the URL here"
                id="website"
                name="website"
                value={formValues.website}
                onChange={handleChange}
                errorBorderColor="crimson"
                isInvalid={formErrors.website}
              />
            </InputGroup>

            {formErrors.website ? (
              <ErrorMessage children={formErrors.website} />
            ) : null}

            <InputGroup>
              <Text htmlFor="username" mr="0.7em">
                Username or Email
              </Text>
              <Input
                placeholder="Enter here"
                id="username"
                name="username"
                value={formValues.username}
                onChange={handleChange}
                errorBorderColor="crimson"
                isInvalid={formErrors.username}
              />
            </InputGroup>

            {formErrors.username ? (
              <ErrorMessage children={formErrors.username} />
            ) : null}

            <InputGroup>
              <Text htmlFor="password" mr="2.2em">
                Password
              </Text>
              <Input
                placeholder="Enter here"
                type={show ? "text" : "password"}
                id="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                errorBorderColor="crimson"
                isInvalid={formErrors.password}
              />
              <InputRightElement
                children={
                  <IconButton
                    icon={show ? <AiFillEyeInvisible /> : <AiFillEye />}
                    onClick={() => setShow(!show)}
                    variant="ghost"
                  />
                }
              />
            </InputGroup>

            {formErrors.password ? (
              <ErrorMessage children={formErrors.password} />
            ) : null}

            {error && (
              <Alert status="error">
                <AlertIcon />
                {error}
              </Alert>
            )}
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={handleFormSubmit}
            bg="yellow.400"
            color="white"
            _hover={{ bg: "yellow.500" }}
            isDisabled={close}
          >
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
