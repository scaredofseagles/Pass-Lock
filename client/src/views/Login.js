import { useState } from "react";
import useAuth from "../utils/useAuth";
import { Link, useHistory } from "react-router-dom";
import {
  Box,
  Input,
  Heading,
  Center,
  Stack,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
  Alert,
  AlertIcon,
  Link as ReachLink,
  Button
} from "@chakra-ui/react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import ErrorMessage from "../components/ErrorMessage";

export default function Login() {
  const initialValues = {
    email: "",
    password: ""
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const history = useHistory();

  const { login } = useAuth();

  const handleChange = e => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const validateFields = values => {
    let errors = {};

    if (!values.email) errors.email = "Must enter an email";
    if (!values.password) errors.password = "Must enter a password";

    return errors;
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    setFormErrors(validateFields(formValues));

    if (!Object.keys(formErrors).length) {
      let result = await login(formValues);

      if (result.data.success) {
        history.push("/home");
      } else setError(result.data.message);
    } else setError("Failed to log in");
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center css-selector"
      style={{ minHeight: "100vh" }}
    >
      <Center>
        <Stack>
          <Box
            borderWidth="2px"
            borderColor="gray.500"
            bg="white"
            borderRadius="7px"
            w="500px"
            minheight="360px"
            mt="3em"
            mb=".5em"
            p="1.5em"
          >
            <Center>
              <Heading>Log In</Heading>
            </Center>

            <Stack spacing={3} mt="1em">
              <InputGroup>
                <Text htmlFor="email" mr="3em">
                  Email
                </Text>
                <Input
                  placeholder="Enter Here"
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  errorBorderColor="crimson"
                  isInvalid={formErrors.email}
                />
              </InputGroup>

              {formErrors.email ? (
                <ErrorMessage children={formErrors.email} />
              ) : null}

              <InputGroup>
                <Text htmlFor="password" mr="1em">
                  Password
                </Text>
                <Input
                  placeholder="Enter Here"
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

            <Button
              onClick={handleFormSubmit}
              mt="1em"
              bg="yellow.400"
              color="white"
              _hover={{ bg: "yellow.500" }}
              style={{ float: "right" }}
            >
              Submit
            </Button>
          </Box>
          {/*<Center>
            <ReachLink as={Link} to="/forgotpassword" color="yellow.400">
              Forget Password?
            </ReachLink>
          </Center>*/}

          <Center>
            <Text color="gray.600">
              Don't have an account?{" "}
              <ReachLink as={Link} to="/signup" color="yellow.400">
                Sign Up
              </ReachLink>
            </Text>
          </Center>
        </Stack>
      </Center>
    </div>
  );
}
