import React, {useRef, useState} from 'react'
import { Card, Form, Button, Container, Alert } from 'react-bootstrap'
import HeaderBar from '../components/HeaderBar'
import { encrypt } from '../utils/crypto'
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
                    //FIXME: change to setMessage
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
                <Card className="mt-5">
                    <Card.Body>
                        <h2 className="mb-4">Add Account</h2>
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
                            <button className="rounded-lg bg-warmblue-500 hover:bg-warmblue-700 py-2.5 px-4 text-white float-right">Add</button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            
        </>
    )
}
