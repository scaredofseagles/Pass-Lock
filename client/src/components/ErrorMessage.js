import { Text } from "@chakra-ui/react";

const ErrorMessage = ({ children }) => {
  return (
    <Text color="red.500" fontSize="sm">
      {children}
    </Text>
  );
};

export default ErrorMessage;
