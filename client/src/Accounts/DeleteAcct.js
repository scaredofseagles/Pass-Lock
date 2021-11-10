import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Alert,
  AlertIcon,
  Text,
  Center
} from "@chakra-ui/react";
import API from "../utils/API";

export default function DeleteAcct(props) {
  const [message, setMessage] = useState("");
  const [close, setClosing] = useState(false);

  async function handleSubmit() {
    let result = await API.removeAcct(props.data.id);
    setMessage(result.data.message);
    if (result.data.success) {
      props.update();
      setClosing(!close);
      setTimeout(() => {
        handleClose();
      }, 50000);
    }
  }

  function handleClose() {
    props.handleClose();
    setMessage("");
    setClosing(false);
  }

  return (
    <Modal isOpen={props.open} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Remove <i>{props.data.url}</i>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Are you sure you want to delete this account?</Text>
          {message && (
            <Center>
              <Alert
                mt=".5em"
                w="90%"
                status={
                  message === "Successfully Removed Account."
                    ? "success"
                    : "error"
                }
              >
                <AlertIcon />
                {message}
              </Alert>
            </Center>
          )}
        </ModalBody>

        <ModalFooter>
          <div style={{ marginLeft: "auto" }}>
            <Button
              disabled={close}
              onClick={handleClose}
              variant="ghost"
              className="mr-1"
            >
              Cancel
            </Button>
            <Button disabled={close} onClick={handleSubmit} colorScheme="red">
              Delete
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
