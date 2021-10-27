import { useState } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { BsThreeDotsVertical } from "react-icons/bs";
import styled from "styled-components";
import DeleteAcct from "./DeleteAcct";
import ModifyAcct from "./ModifyAcct";

const OptionBar = styled.div`
  position: absolute;
  top: 5%;
  right: 1.5%;
`;

export default function UpdateAccount(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <OptionBar>
        <IconButton children={<BsThreeDotsVertical />} onClick={handleClick} />
      </OptionBar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            setOpenEdit(!openEdit);
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            setOpenDelete(!openDelete);
          }}
        >
          Remove
        </MenuItem>
      </Menu>

      <ModifyAcct
        data={props.data}
        open={openEdit}
        handleClose={() => setOpenEdit(!openEdit)}
        update={props.update}
      />
      <DeleteAcct
        data={props.data}
        open={openDelete}
        handleClose={() => setOpenDelete(!openDelete)}
        update={props.update}
      />
    </>
  );
}
