import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import useAuth  from "../utils/useAuth"
import { Link } from 'react-router-dom'

export default function ForgotPassword(props) {
    
    const emailRef = useRef()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const { resetPassword } = useAuth()

    async function handleFormSubmit(event){
        event.preventDefault()

        

        try{
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Success! Check your email for further instructions')
        } catch{
            setError('Failed to reset password')
        }

        setLoading(false)
        
    }

    return (
        <>
           <Card bg="light">
                <Card.Body>
                    <h2 className="text-center mb-4" >Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit" variant="primary">Reset Password</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Log In</Link>
                    </div>
                </Card.Body>
            </Card> 
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
        </>
    )
}
