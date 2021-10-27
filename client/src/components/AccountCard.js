import { useState, useRef } from "react";
import { Button as IconButton, InputGroup, FormControl } from "react-bootstrap";
import {
  Alert,
  AlertIcon,
  Text,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalCloseButton
} from "@chakra-ui/react";
import { CloseButton } from "@chakra-ui/react";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { FaClipboard } from "react-icons/fa";
import { decrypt } from "../utils/crypto";
import useAuth from "../utils/useAuth";
import UpdateAccount from "./UpdateAccount";
import useStore from "../utils/store";

export default function AccountCard(props) {
  const [show, setShow] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);

  const websiteRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  function copyToClipboard(ref) {
    try {
      ref.current.select();
      document.execCommand("copy");
      //event.target.focus();
      setCopyStatus("Copied!");
      setAlert(!alert);
    } catch (err) {
      setCopyStatus("Something went wrong");
    }
  }

  function handleClose() {
    setOpen(!open);
  }

  return (
    <>
      <ConfirmModal
        open={open}
        handleClose={handleClose}
        allow={() => setShow(!show)}
      />
      <div className="card mt-4 mb-3" style={{ minWidth: "30vw" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.data.image || "https://via.placeholder.com/200"}
              alt="account"
              width="200"
              height="200"
            />
          </div>
          <div className="col-md-3">
            <div className="card-body">
              <h5 className="card-title">Account Name</h5>
              <p className="card-text">
                <strong>Website: </strong>
                <InputGroup>
                  <FormControl
                    value={props.data.url}
                    ref={websiteRef}
                    readOnly
                  />
                  <InputGroup.Append>
                    <IconButton
                      variant="outline-secondary"
                      onClick={() => copyToClipboard(websiteRef)}
                    >
                      <FaClipboard />
                    </IconButton>
                  </InputGroup.Append>
                </InputGroup>
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-body align-items-center">
              <p className="card-text">
                <strong>Username: </strong>
                <InputGroup>
                  <FormControl
                    value={props.data.username}
                    ref={usernameRef}
                    readOnly
                  />
                  <InputGroup.Append>
                    <IconButton
                      variant="outline-secondary"
                      onClick={() => copyToClipboard(usernameRef)}
                    >
                      <FaClipboard />
                    </IconButton>
                  </InputGroup.Append>
                </InputGroup>
              </p>
              <p className="card-text">
                <strong>Password: </strong>
                <InputGroup>
                  <FormControl
                    type={!show ? "password" : "text"}
                    ref={passwordRef}
                    value={decrypt(props.data.password)}
                    readOnly
                  />
                  <InputGroup.Append>
                    <IconButton
                      variant="outline-secondary"
                      onClick={() => (!show ? setOpen(!open) : setShow(!show))}
                    >
                      {!show ? <BsEyeFill /> : <BsEyeSlashFill />}{" "}
                    </IconButton>
                    <IconButton
                      variant="outline-secondary"
                      onClick={() => copyToClipboard(passwordRef)}
                    >
                      <FaClipboard />
                    </IconButton>
                  </InputGroup.Append>
                </InputGroup>
              </p>
            </div>
          </div>
          <UpdateAccount data={props.data} update={props.update} />
        </div>

        {alert && (
          <Alert
            className="text-center"
            status={copyStatus === "Copied!" ? "success" : "error"}
            w="94%"
            style={{ margin: "1.5% 3%" }}
            transition
            dismissible
          >
            <AlertIcon />
            {copyStatus}
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => setAlert(false)}
            />
          </Alert>
        )}
      </div>
    </>
  );
}

export function ConfirmModal(props) {
  const [message, setMessage] = useState("");
  const [close, setClosing] = useState(false);

  const confirmPasswordRef = useRef();
  const { confirmPassword } = useAuth();
  const currentUser = useStore(state => state.currentUser);

  const handleFormSubmit = async event => {
    event.preventDefault();

    let result = await confirmPassword(
      currentUser.email,
      confirmPasswordRef.current.value
    );
    if (result.data.success) {
      setMessage("Confirmed!");
      setClosing(!close);
      setTimeout(() => {
        props.handleClose();
        setMessage("");
        setClosing(false);
        props.allow();
      }, 1500);
    } else setMessage(result.data.message);
  };

  return (
    <Modal
      isOpen={props.open}
      onClose={() => {
        props.handleClose();
        setMessage("");
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirm Identity</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Please confirm your password: </Text>
          <Input my={4} type="password" ref={confirmPasswordRef} isRequired />

          {message && (
            <Alert
              className="text-center"
              status={message === "Confirmed!" ? "success" : "error"}
            >
              <AlertIcon />
              {message}
            </Alert>
          )}
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={handleFormSubmit}
            isDisabled={close}
            className="float-right"
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
