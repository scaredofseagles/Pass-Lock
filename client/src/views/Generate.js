import React, {useState} from 'react'
import HeaderBar from '../components/HeaderBar'
import { Card, Container, Form, Button, Modal, } from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider'

export default function Generate() {
    const [show, setShow] = useState(false);
    const [ value, setValue ] = React.useState(50);
    const [password, setPassword] = useState('')
    const [parameters, setParameters] = useState({
        uppercase: false,
        lowercase: true,
        numbers: false,
        symbols: false
    })

    function userInput(event){
        let finalCharSet =''
        const {name, checked} = event.target


        if (name === 'uppercase' && checked) finalCharSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (name === 'lowercase' && checked) finalCharSet += "abcdefghijklmnopqrstuvwxyz";
        if (name === 'symbols' && checked) finalCharSet += "1234567890";
        if (name === 'numbers' && checked) finalCharSet += "!@#$%?&*()";

        console.log('finalCharSet=', finalCharSet)
        // if(checked){
        //     //console.log(checked)
        //     let checkedKey = Object.keys(parameters).filter((param)=> param === name)
        //     console.log('checkedKey=', checkedKey)
        //     setParameters(prevState => ({...prevState, checkedKey: checked}))
        //     console.log(parameters)
        // }

    }


    // modal handling functions
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function handleFormSubmit(event){
        event.preventDefault()

        handleShow()
    }

    return (
        <>
            <HeaderBar/>
            <Container>
                <Example handleShow={handleShow} handleClose={handleClose} show={show}/>
                <Card style={{paddingLeft: "40px", paddingRight:"40px"}}>
                    <h2 className="text-center mt-3">Generate A Password</h2>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group>
                            <h4>Select all that apply</h4>
                            <Form.Check onChange={userInput} inline label="Uppercase Letters" type="checkbox" name="uppercase" defaultChecked={parameters.uppercase}/>
                            <Form.Check onChange={userInput} inline label="Lowercase Letters" type="checkbox" name="lowercase" defaultChecked={parameters.lowercase}/>
                            <Form.Check onChange={userInput} inline label="Numbers" type="checkbox" name="numbers" defaultChecked={parameters.numbers}/>
                            <Form.Check onChange={userInput} inline label="Symbols" type="checkbox" name="symbols" defaultChecked={parameters.symbols}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicRange">
                            <Form.Label>Password Length</Form.Label>
                            <RangeSlider
                                value={value}
                                onChange={e => setValue(e.target.value)}
                            />
                        </Form.Group>
                        <Button className="w-50" variant="danger" type="submit">Generate</Button>
                    </Form>
                </Card>
            </Container>
        </>
    )
}

function Example(props) {
    
  
    return (
      <>
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your password is: {props.password} </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
