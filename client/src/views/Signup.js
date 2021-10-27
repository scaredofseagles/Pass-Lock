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

export default function Signup() {
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNum: "",
    funName: "",
    email: "",
    password: "",
    confirmPass: ""
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const history = useHistory();

  const { signUp } = useAuth();

  const handleChange = e => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const validateFields = values => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    let errors = {};

    if (!values.firstName) errors.firstName = "Must enter a first name";
    if (!values.lastName) errors.lastName = "Must enter a last name";

    if (!values.email) errors.email = "Must enter an email";
    else if (!emailRegex.test(values.email))
      errors.email = "Email is not valid";

    if (!values.password) errors.password = "Must enter a password";
    else if (values.password.length < 8)
      errors.password = "Password must be at least 8 characters";
    else if (values.password.length > 15)
      errors.password = "Password must not exceed 15 characters";

    if (!values.confirmPass) errors.confirmPass = "Must confirm password";
    else if (values.password !== values.confirmPass)
      errors.confirmPass = "Passwords do not match";

    return errors;
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    setFormErrors(validateFields(formValues));

    if (!Object.keys(formErrors).length) {
      let result = await signUp(formValues);

      if (result.data.success) {
        history.push("/");
      } else setError(result.data.message);
    } else setError("Failed to Create User.");
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
              <Heading>Sign Up</Heading>
            </Center>

            <Stack spacing={3} mt="1em">
              <InputGroup>
                <Text htmlFor="firstName" mr="1em">
                  First Name
                </Text>
                <Input
                  placeholder="Enter Here"
                  id="firstName"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  errorBorderColor="crimson"
                  isInvalid={formErrors.firstName}
                />
              </InputGroup>

              {formErrors.firstName ? (
                <ErrorMessage children={formErrors.firstName} />
              ) : null}

              <InputGroup>
                <Text htmlFor="lastName" mr="1em">
                  Last Name
                </Text>
                <Input
                  placeholder="Enter Here"
                  id="lastName"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  errorBorderColor="crimson"
                  isInvalid={formErrors.lastName}
                />
              </InputGroup>

              {formErrors.lastName ? (
                <ErrorMessage children={formErrors.lastName} />
              ) : null}

              <InputGroup>
                <Text htmlFor="email" mr="2em">
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

              <InputGroup>
                <Text htmlFor="confirmPass" mr="1em">
                  Confirm Password
                </Text>
                <Input
                  placeholder="Enter Here"
                  type={showConfirm ? "text" : "password"}
                  id="confirmPass"
                  name="confirmPass"
                  value={formValues.confirmPass}
                  onChange={handleChange}
                  errorBorderColor="crimson"
                  isInvalid={formErrors.confirmPass}
                />
                <InputRightElement
                  children={
                    <IconButton
                      icon={
                        showConfirm ? <AiFillEyeInvisible /> : <AiFillEye />
                      }
                      onClick={() => setShowConfirm(!showConfirm)}
                      variant="ghost"
                    />
                  }
                />
              </InputGroup>

              {formErrors.confirmPass ? (
                <ErrorMessage children={formErrors.confirmPass} />
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
          <Center>
            <Text color="gray.600">
              Already have an account?{" "}
              <ReachLink as={Link} to="/login" color="yellow.400">
                Login
              </ReachLink>
            </Text>
          </Center>
        </Stack>
      </Center>
    </div>
  );
}
