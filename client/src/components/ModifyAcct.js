import { useState, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  Alert,
  AlertIcon,
  Center
} from "@chakra-ui/react";
import API from "../utils/API";
import { MdModeEdit } from "react-icons/md";
import { encrypt } from "../utils/crypto";
import { ConfirmModal } from "./AccountCard";

export default function ModifyAcct(props) {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [close, setClosing] = useState(false);
  const [value, setValue] = useState("password"); //initial value set so bullets are shown -_-

  const websiteRef = useRef();
  const usernameRef = useRef();

  async function handleFormSubmit(event) {
    event.preventDefault();

    let hashedPass;

    if (value !== "password" && value !== "") hashedPass = await encrypt(value);

    const newData = {
      url: websiteRef.current.value,
      email: usernameRef.current.value,
      password: hashedPass ? hashedPass : null
    };

    let result = await API.editAcct(props.data.id, newData);
    setMessage(result.data.message);
    if (result.data.success) {
      props.update();
      setClosing(!close);
      setTimeout(handleClose, 1500);
    }
  }

  function handleClose() {
    props.handleClose();
    setShow(false);
    setMessage("");
    setValue("password");
    setClosing(false);
  }

  return (
    <>
      <ConfirmModal
        open={open}
        handleClose={() => setOpen(!open)}
        allow={() => {
          setShow(!show);
          setValue("");
        }}
      />

      <Modal isOpen={props.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalHeader>
            Modify <i>{props.data.url}</i>
          </ModalHeader>
          <ModalBody style={{ padding: "5%" }}>
            <Text>Website: </Text>
            <Input my=".5em" defaultValue={props.data.url} ref={websiteRef} />

            <Text>Username/Email: </Text>
            <Input
              my=".5em"
              defaultValue={props.data.username}
              ref={usernameRef}
            />

            <Text>Password: </Text>
            <InputGroup>
              <Input
                type={!show ? "password" : "text"}
                value={value}
                readOnly={!show}
                onChange={e => setValue(e.target.value)}
              />
              <InputRightElement>
                <IconButton
                  onClick={() => (!show ? setOpen(!open) : setShow(!show))}
                  variant="outline"
                  disabled={show}
                  icon={<MdModeEdit />}
                />
              </InputRightElement>
            </InputGroup>

            {message && (
              <Center>
                <Alert
                  mt=".5em"
                  status={
                    message === "Successfully Updated Account."
                      ? "success"
                      : "error"
                  }
                  w="90%"
                >
                  <AlertIcon />
                  {message}
                </Alert>
              </Center>
            )}
          </ModalBody>

          <ModalFooter>
            <div style={{ float: "right" }}>
              <Button
                disabled={close}
                onClick={handleClose}
                variant="ghost"
                className="mr-1"
              >
                Cancel
              </Button>

              <Button
                disabled={close}
                onClick={handleFormSubmit}
                bg="yellow.400"
                color="white"
                _hover={{ bg: "yellow.500" }}
              >
                Save
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
