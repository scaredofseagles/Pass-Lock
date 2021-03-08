import { useState, useRef } from "react";
import { Button, Alert, InputGroup, FormControl, Modal, Form } from "react-bootstrap";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { FaClipboard } from "react-icons/fa";
import { decrypt } from "../utils/crypto";

export default function AccountCard(props) {
  const [show, setShow] = useState(false)
  const [copyStatus, setCopyStatus] = useState("");
  const [open, setOpen] = useState(false)

  const websiteRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  function copyToClipboard(ref) {
    try {
      ref.current.select();
      document.execCommand("copy");
      //event.target.focus();
      setCopyStatus("Copied!");
    } catch (err) {
      setCopyStatus("Something went wrong");
    }
  }

  function handleClose(){
    setOpen(!open)
  }

  return (
    <>
      <ConfirmModal open={open} handleClose={handleClose} allow={() => setShow(!show)}/>
      <div className="card mt-4 mb-3" style={{ minWidth: "30vw" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://via.placeholder.com/200" alt="account" />
          </div>
          <div className="col-md-3">
            <div className="card-body">
              <h5 className="card-title">Account Name</h5>
              <p className="card-text">
                <strong>Website: </strong>
                <InputGroup>
                <FormControl value={props.data.url} ref={websiteRef} readOnly/>
                <InputGroup.Append>
                  <Button variant="outline-secondary" onClick={() => copyToClipboard(websiteRef)}><FaClipboard /></Button>
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
                  <FormControl value={props.data.username} ref={usernameRef} readOnly/>
                  <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={() => copyToClipboard(usernameRef)}><FaClipboard /></Button>
                  </InputGroup.Append>
                </InputGroup>
              </p>
              <p className="card-text">
                <strong>Password: </strong>
                <InputGroup>
                  <FormControl type={!show ? "password" : "text"} ref={passwordRef} value={decrypt(props.data.password)} readOnly/>
                  <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={() => setShow(!show)}> { !show ? <BsEyeFill /> : <BsEyeSlashFill />} </Button>
                    <Button variant="outline-secondary" onClick={() => copyToClipboard(passwordRef)}><FaClipboard /></Button>
                  </InputGroup.Append>
                </InputGroup>
              </p>
            </div>
          </div>
        </div>

        {copyStatus && <Alert className="text-center" variant={copyStatus === "Copied!" ? 'success' : 'danger'}  >{copyStatus}</Alert>}
      </div>
    </>
  );
}

function ConfirmModal(props){
  const confirmPasswordRef = useRef();

  async function handleFormSubmit(event){
    event.preventDefault();

    //TODO:check if the password matches user password


  }

  return(
    <Modal show={props.open} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Identity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Please confirm your password: </Form.Label>
          <Form.Control type="password" ref={confirmPasswordRef}/>
        </Form.Group>
        <Button className="float-right">Submit</Button>
      </Modal.Body>
    </Modal>
  )
}
