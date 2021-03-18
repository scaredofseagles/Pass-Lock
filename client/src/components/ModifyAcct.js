import { useState, useRef } from "react";
import { Alert, InputGroup, FormControl, Modal, Form, Button } from "react-bootstrap";
import API from "../utils/API";
import { BsUnlock } from "react-icons/bs";
import { decrypt, encrypt } from "../utils/crypto";
import { ConfirmModal } from "./AccountCard"

export default function ModifyAcct(props){
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);

    const websiteRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();

    async function handleFormSubmit(event){
        event.preventDefault();
        //TODO: check if password has changed and encrypt, 
        //also only change to decrypted password if password is confirmed 
        const newData = {
            user_id: props.data.user_id,
            url: websiteRef.current.value,
            email: usernameRef.current.value,
            password: passwordRef.current.value
        }
        console.log(newData)
        //let result = await API.editAcct(props.data.id, newData)
    }

    function handleClose(){
        props.handleClose();
        setShow(false);
    }

    return (
        <>
            <ConfirmModal open={open} handleClose={() => setOpen(!open)} allow={() => setShow(!show)}/>

            <Modal show={props.open} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modify <i>{props.data.url}</i></Modal.Title>
                </Modal.Header>
                <Modal.Body style={{padding: '5%'}}>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group>
                            <Form.Label>Website: </Form.Label>
                            <Form.Control defaultValue={props.data.url} ref={websiteRef}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Username/Email: </Form.Label>
                            <Form.Control defaultValue={props.data.username} ref={usernameRef}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password: </Form.Label>
                            <InputGroup>
                                <Form.Control type={!show ? "password" : "text"} defaultValue={show ? decrypt(props.data.password) : props.data.password} readOnly={!show} ref={passwordRef}/>
                                <InputGroup.Append>
                                    <Button onClick={() => !show ? setOpen(!open) : setShow(!show)} variant="outline-secondary" disabled={show}><BsUnlock /></Button>
                                </InputGroup.Append>
                            </InputGroup>
                            
                        </Form.Group>
                        <div style={{float: "right"}}>
                            <Button onClick={handleClose} type="button" variant="outline-secondary" className="mr-1">Cancel</Button>
                            <Button type="submit">Save</Button>
                        </div>
                        
                        
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}