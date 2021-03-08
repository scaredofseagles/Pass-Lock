import React, {useRef, useState} from 'react'
import { Card, Form, Button, Container, Alert } from 'react-bootstrap'
import HeaderBar from '../components/HeaderBar'
import { encrypt } from '../utils/crypto'
import { useHistory } from 'react-router-dom'
import API from '../utils/API';
import { useAuth } from "../contexts/AuthContext"

export default function AddAccount() {
    const websiteRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()

    const [error, setError] = useState('')
    const { currentUser } = useAuth()

    async function handleFormSubmit(event){
        event.preventDefault();
        try {
            let hashedPass = await encrypt(passwordRef.current.value);
            debugger;

            if (hashedPass){
                let newAcct = {
                    website: websiteRef.current.value,
                    username: usernameRef.current.value,
                    password: hashedPass,
                    user: currentUser.uid
                }
                
                let result = await API.sendAcct(newAcct)
                if (result.data.success){
                    window.location.replace("/")
                }else(
                    setError(result.data.message)
                )
            }
        } catch(err){
            setError('Something went wrong. Please Try Again')
        }
        
    }

    return (
        <>
            <HeaderBar />
            <Container>
                <Card>
                    <Card.Body>
                        <h2 className="mb-2">Add Account</h2>
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group id="website">
                                <Form.Label>Website </Form.Label>
                                <Form.Control type="link" ref={websiteRef} placeholder="Paste the URL here" required/>
                            </Form.Group>
                            <Form.Group id="username">
                                <Form.Label>Username or Email</Form.Label>
                                <Form.Control ref={usernameRef} required/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password </Form.Label>
                                <Form.Control type="password" ref={passwordRef} required/>
                            </Form.Group>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Button type="submit" className="w-50 float-center">Add</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            
        </>
    )
}
