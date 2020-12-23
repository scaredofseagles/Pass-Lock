import React, {useRef} from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap'
import HeaderBar from '../components/HeaderBar'

export default function AddAccount() {
    const websiteRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()

    function handleFormSubmit(event){
        event.preventDefault()
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
                                <Form.Control type="link" ref={websiteRef} required/>
                            </Form.Group>
                            <Form.Group id="username">
                                <Form.Label>Username or Email</Form.Label>
                                <Form.Control type="email" ref={usernameRef} required/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password </Form.Label>
                                <Form.Control type="password" ref={passwordRef} required/>
                            </Form.Group>
                            <Button type="submit" className="w-50 float-center">Add</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            
        </>
    )
}
