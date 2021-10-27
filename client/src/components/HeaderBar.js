import React, { useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import useAuth from "../utils/useAuth";
import AddAccount from "../views/AddAccount";
import Generate from "../views/Generate";
import { useHistory, Link } from "react-router-dom";
import { FcLock } from "react-icons/fc";
import { FiPlus } from "react-icons/fi";
import { MdAutorenew } from "react-icons/md";

import useStore from "../utils/store";

export default function HeaderBar({ update }) {
  const [error, setError] = useState("");
  const [openAcct, setOpenAcct] = useState(false);
  const [openGenerate, setOpenGenerate] = useState(false);

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
          <IconButton
            as={Link}
            variant="link"
            size="lg"
            to="/home"
            icon={<FcLock />}
          />
          <div style={{ marginLeft: "auto", marginRight: ".5em" }}>
            <IconButton
              aria-label="Add Account"
              onClick={() => setOpenAcct(true)}
              variant="ghost"
              isRound={true}
              color="whitesmoke"
              _hover={{ backgroundColor: "gray.700" }}
              icon={<FiPlus />}
            />
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
            <Menu style={{ float: "right" }}>
              <MenuButton
                style={{ color: "whitesmoke", padding: ".6em" }}
                _hover={{ backgroundColor: "gray.700" }}
              >
                Welcome, {currentUser?.first_name}
              </MenuButton>
              <MenuList>
                {/*  <MenuItem>Profile</MenuItem> */}
                <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </ul>
        <Box mt={2} w="100%" h="6px" bg="yellow.400"></Box>
      </Box>
      <AddAccount
        open={openAcct}
        onClose={() => setOpenAcct(false)}
        updateData={update}
      />
      <Generate open={openGenerate} onClose={() => setOpenGenerate(false)} />
    </>
  );
}
