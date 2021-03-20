import { useState } from "react";
import { Alert, Modal, Button } from "react-bootstrap";
import API from "../utils/API";

export default function DeleteAcct(props){
    const [message, setMessage] = useState('');
    const [close, setClosing] = useState(false)

    async function handleSubmit(){
        console.log(props.data)
        let result = await API.removeAcct(props.data.id)
        console.log(result.data)
        setMessage(result.data.message)
        if (result.data.success){
            setClosing(!close)
            setTimeout(() => {
                handleClose()
            }, 3000);
            //TODO something to update dashboard
        }
    }

    function handleClose(){
        props.handleClose();
        setMessage('');
        setClosing(false);
    }

    return (
        <Modal show={props.open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Remove <i>{props.data.url}</i></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this account?
            </Modal.Body>

            {message && <Alert className="text-center ml-4 mr-4" variant={message === "Successfully Removed Account" ? 'success' : 'danger'}>{message}</Alert>}

            <div style={{margin: '0 4% 3% 3%', marginLeft: 'auto'}}>
                <Button disabled={close} onClick={handleClose} variant="outline-secondary" className="mr-1">Cancel</Button>
                <Button disabled={close} onClick={handleSubmit} variant="danger">Delete</Button>
            </div>
            
        </Modal>
    )
}