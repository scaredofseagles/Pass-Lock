import { useState, useEffect } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (window.location.search !== "")
      setValue(queryString.parse(window.location.search).q);
  }, []);

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (value === "") return;
    history.push(`/search?q=${value.split(" ").join("+")}`);
  };

  return (
    <Box>
      <InputGroup>
        <Input
          borderColor="gray.600"
          color="whitesmoke"
          placeholder="Search Accounts"
          value={value}
          onChange={handleInputChange}
        />
        <InputRightElement
          children={
            <IconButton
              aria-label="Search"
              icon={<AiOutlineSearch />}
              variant="outline"
              borderColor="gray.600"
              _hover={{ bg: "gray.700", borderColor: "gray.200" }}
              color="whitesmoke"
              onClick={handleSubmit}
            />
          }
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
