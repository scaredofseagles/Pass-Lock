import { useState, useRef } from "react";
import HeaderBar from "../components/HeaderBar";
import {
  Card,
  Container,
  Form,
  Button,
  Modal,
  Alert,
  InputGroup,
  FormControl,
  FormLabel
} from "react-bootstrap";
import { FaClipboard } from "react-icons/fa";
import { Slider } from '@material-ui/core';

export default function Generate() {
  const [show, setShow] = useState(false);
  const [range, setRange] = useState(10);
  const [password, setPassword] = useState("");

  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const [error, setError] = useState("");

  function generatePass() {
    const isLength = range;
    let finalCharSet = "";

    if (uppercase) finalCharSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) finalCharSet += "abcdefghijklmnopqrstuvwxyz";
    if (symbols) finalCharSet += "1234567890";
    if (numbers) finalCharSet += "!@#$%?&*";

    console.log("finalCharSet=", finalCharSet);

    let finalPass = "";

    for (let i = 0; i < isLength; i++) {
      let randomInt = Math.floor(Math.random() * finalCharSet.length + 1);
      finalPass += finalCharSet[randomInt];
    }

    console.log({ finalPass });
    setPassword(finalPass);
    displayPassword(finalPass);
  }

  function displayPassword(finalPass) {
    console.log({ password });
    if (finalPass.length > 1) {
      handleShow();
    } else {
      setError("Something went wrong");
    }
  }

  // modal handling functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleFormSubmit(event) {
    event.preventDefault();

    generatePass();
    //handleShow()
  }
  const handleChange = (event, newValue) => {
    setRange(newValue);
  };
  return (
    <>
      <HeaderBar />
      <Container>
        {error && <Alert variant="danger">{error}</Alert>}
        <Example
          handleShow={handleShow}
          handleClose={handleClose}
          show={show}
          password={password}
        />
        <Card style={{ paddingLeft: "40px", paddingRight: "40px", marginTop: '5%' }}>
          <h2 className="text-center mt-3">Generate A Password</h2>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <h4>Select all that apply</h4>
              <Form.Check
                value={uppercase}
                onChange={(e) => setUppercase(e.target.checked)}
                inline
                label="Uppercase Letters"
                type="checkbox"
                name="uppercase"
              />
              <Form.Check
                value={lowercase}
                onChange={(e) => setLowercase(e.target.checked)}
                inline
                label="Lowercase Letters"
                type="checkbox"
                name="lowercase"
                defaultChecked
              />
              <Form.Check
                value={numbers}
                onChange={(e) => setNumbers(e.target.checked)}
                inline
                label="Numbers"
                type="checkbox"
                name="numbers"
              />
              <Form.Check
                value={symbols}
                onChange={(e) => setSymbols(e.target.checked)}
                inline
                label="Symbols"
                type="checkbox"
                name="symbols"
              />
            </Form.Group>
            <Form.Group controlId="formBasicRange">
              <Form.Label>Password Length</Form.Label>
              <Slider 
                value={range}
                onChange={handleChange}
                valueLabelDisplay="on"
                max={40}
                aria-labelledby="continuous-slider"
              />
            </Form.Group>

            <button className="rounded-lg bg-warmblue-500 hover:bg-warmblue-700 py-2.5 px-4 text-white mb-3 float-right">Generate</button>
          </Form>
        </Card>
      </Container>
    </>
  );
}

function Example(props) {
  const passwordRef = useRef(null);
  const [copyStatus, setCopyStatus] = useState("");

  function copyToClipboard(event) {
    try {
      passwordRef.current.select();
      document.execCommand("copy");
      event.target.focus();
      setCopyStatus("Copied!");
    } catch (err) {
      setCopyStatus("Something went wrong");
    }
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Generated Password</Modal.Title>
        </Modal.Header>
        <Modal.Body > 
            <FormLabel>Your password is: </FormLabel>
            <InputGroup className="mb-3">
                <FormControl
                    value={props.password}
                    ref={passwordRef}
                    className="text-center"
                />
                <InputGroup.Append>
                <Button variant="outline-secondary" onClick={copyToClipboard} ><FaClipboard /></Button>
                </InputGroup.Append>
            </InputGroup>


        </Modal.Body>
        {copyStatus && <Alert className="text-center" variant={copyStatus === "Copied!" ? 'success' : 'danger'}  >{copyStatus}</Alert>}
        <Modal.Footer>
          <Button variant="secondary" onClick={ () => {props.handleClose(); setCopyStatus("")}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
