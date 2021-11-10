import React, { useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip
} from "@chakra-ui/react";
import useAuth from "../utils/useAuth";
import { useAccount } from "../Accounts/useAccount";
import AddAccount from "../Accounts/AddAccount";
import Generate from "../views/Generate";
import SearchBar from "../Search/SearchBar";
import { useHistory, Link } from "react-router-dom";
import { FcLock } from "react-icons/fc";
import { FiPlus } from "react-icons/fi";
import { MdAutorenew } from "react-icons/md";

import useStore from "../utils/store";

export default function HeaderBar() {
  const [error, setError] = useState("");
  const [openAcct, setOpenAcct] = useState(false);
  const [openGenerate, setOpenGenerate] = useState(false);
  const { getAccounts } = useAccount();

  const history = useHistory();
  const { logOut } = useAuth();
  const currentUser = useStore(state => state.currentUser);

  async function handleLogOut() {
    setError("");
    try {
      await logOut(currentUser.id);
      history.push("/login");
    } catch {
      setError("Failed to Logout");
    }
  }

  return (
    <>
      <Box pt={5} pb={0} bg="gray.800">
        <ul style={{ display: "flex", listStyleType: "none" }}>
          <Tooltip hasArrow label="Home" bg="gray.700" color="white">
            <IconButton
              as={Link}
              variant="link"
              size="lg"
              to="/home"
              icon={<FcLock />}
            />
          </Tooltip>

          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <SearchBar />
          </div>
          <div style={{ marginLeft: "auto", marginRight: ".5em" }}>
            <Tooltip hasArrow label="Add Account" bg="gray.700" color="white">
              <IconButton
                aria-label="Add Account"
                onClick={() => setOpenAcct(true)}
                variant="ghost"
                isRound={true}
                color="whitesmoke"
                _hover={{ backgroundColor: "gray.700" }}
                icon={<FiPlus />}
              />
            </Tooltip>
            <Tooltip
              hasArrow
              label="Generate Password"
              bg="gray.700"
              color="white"
            >
              <IconButton
                aria-label="Generate"
                onClick={() => setOpenGenerate(true)}
                mr=".7em"
                variant="ghost"
                isRound={true}
                color="whitesmoke"
                _hover={{ backgroundColor: "gray.700" }}
                icon={<MdAutorenew />}
              />
            </Tooltip>
            <Menu style={{ float: "right" }} bg="gray.700">
              <MenuButton
                style={{ color: "whitesmoke", padding: ".6em" }}
                _hover={{ backgroundColor: "gray.700" }}
              >
                Welcome, {currentUser?.first_name}
              </MenuButton>
              <MenuList bg="gray.800" color="whitesmoke">
                {/*  <MenuItem>Profile</MenuItem> */}
                <MenuItem
                  onClick={handleLogOut}
                  _hover={{ backgroundColor: "gray.700" }}
                  _focus={{ backgroundColor: "gray.700" }}
                >
                  Log Out
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </ul>
        <Box mt={2} w="100%" h="6px" bg="yellow.400"></Box>
      </Box>
      <AddAccount
        open={openAcct}
        onClose={() => setOpenAcct(false)}
        updateData={getAccounts}
      />
      <Generate open={openGenerate} onClose={() => setOpenGenerate(false)} />
    </>
  );
}
