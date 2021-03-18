import { useState, useRef } from "react";
import { Button, Alert, InputGroup, FormControl, Modal, Form } from "react-bootstrap";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { FaClipboard } from "react-icons/fa";
import { decrypt } from "../utils/crypto";
import { useAuth } from "../contexts/AuthContext";
import UpdateAccount from "./UpdateAccount";

export default function AccountCard(props) {
  const [show, setShow] = useState(false)
  const [copyStatus, setCopyStatus] = useState("");
  const [open, setOpen] = useState(false)
  const [alert, setAlert] = useState(false)

  const websiteRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  function copyToClipboard(ref) {
    try {
      ref.current.select();
      document.execCommand("copy");
      //event.target.focus();
      setCopyStatus("Copied!");
      setAlert(!alert)
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
            <img src={props.data.image || "https://via.placeholder.com/200"} alt="account" width="200" height="200"/>
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
                    <Button variant="outline-secondary" onClick={() => !show ? setOpen(!open) : setShow(!show)}> { !show ? <BsEyeFill /> : <BsEyeSlashFill />} </Button>
                    <Button variant="outline-secondary" onClick={() => copyToClipboard(passwordRef)}><FaClipboard /></Button>
                  </InputGroup.Append>
                </InputGroup>
              </p>
            </div>
          </div>
          <UpdateAccount data={props.data}/>
          
        </div>

        {copyStatus && <Alert show={alert} className="text-center" variant={copyStatus === "Copied!" ? 'success' : 'danger'} style={{margin: '1.5% 3%'}} transition dismissible onClose={() => setAlert(false)}>{copyStatus}</Alert>}
      </div>
    </>
  );
}

export function ConfirmModal(props){
  const [message, setMessage] = useState('');
  const [close, setClosing] = useState(false);

  const confirmPasswordRef = useRef();
  const { confirmPassword, currentUser } = useAuth();

  async function handleFormSubmit(event){
    event.preventDefault();

    try {
      await confirmPassword(currentUser.email, confirmPasswordRef.current.value)
      setMessage('Confirmed!')
      setClosing(!close)
      setTimeout(() => {
        props.handleClose()
        setMessage('')
        setClosing(false);
        props.allow();
      }, 2000);
    } catch (error) {
      setMessage('Failed to Confirm Password')
      console.error(error)
    }

  }

  return(
    <Modal show={props.open} onHide={() => {props.handleClose(); setMessage('')}}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Identity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Please confirm your password: </Form.Label>
          <Form.Control type="password" ref={confirmPasswordRef} required/>
        </Form.Group>

        {message && <Alert className="text-center" variant={message === "Confirmed!" ? "success" : "danger"}>{message}</Alert>}

        <Button onClick={handleFormSubmit} disabled={close} className="float-right">Submit</Button>
      </Modal.Body>
    </Modal>
  )
}
