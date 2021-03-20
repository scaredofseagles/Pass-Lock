import { useState, useRef } from "react";
import { Alert, InputGroup, Modal, Form, Button } from "react-bootstrap";
import API from "../utils/API";
import { MdModeEdit } from "react-icons/md";
import { encrypt } from "../utils/crypto";
import { ConfirmModal } from "./AccountCard"

export default function ModifyAcct(props){
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [close, setClosing] = useState(false);
    const [value, setValue] = useState('password'); //initial value set so bullets are shown -_-

    const websiteRef = useRef();
    const usernameRef = useRef();

    async function handleFormSubmit(event){
        event.preventDefault();
        
        let hashedPass;

        if (value !== 'password' && value !== "") hashedPass = await encrypt(value);

        const newData = {
            url: websiteRef.current.value,
            email: usernameRef.current.value,
            password: hashedPass ? hashedPass : null
        }

        let result = await API.editAcct(props.data.id, newData)  
        setMessage(result.data.message)
        if (result.data.success){
            setClosing(!close)
            setTimeout(handleClose, 3000)
            //TODO: update dashboard
        }
    }

    function handleClose(){
        props.handleClose();
        setShow(false);
        setMessage('');
        setValue('password');
        setClosing(false);
    }

    return (
        <>
            <ConfirmModal 
                open={open} 
                handleClose={() => setOpen(!open)} 
                allow={() => {setShow(!show); setValue('')}}
            />

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
                                <Form.Control 
                                    type={!show ? "password" : "text"} 
                                    value={value} 
                                    readOnly={!show} 
                                    onChange={(e) => setValue(e.target.value)}
                                />
                                <InputGroup.Append>
                                    <Button onClick={() => !show ? setOpen(!open) : setShow(!show)} variant="outline-secondary" disabled={show}><MdModeEdit /></Button>
                                </InputGroup.Append>
                            </InputGroup>
                            
                        </Form.Group>

                        {message && <Alert variant={message === "Successfully Updated Account" ? 'success' : 'danger'} className="text-center">{message}</Alert>}

                        <div style={{float: "right"}}>
                            <Button disabled={close} onClick={handleClose} type="button" variant="outline-secondary" className="mr-1">Cancel</Button>
                            <Button disabled={close} type="submit">Save</Button>
                        </div>
                    
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}