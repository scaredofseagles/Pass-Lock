import React, { useState } from 'react'
import { Navbar, Nav, Button, Alert } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from 'react-router-dom'
import { FcLock } from "react-icons/fc";

export default function HeaderBar() {
    const [error, setError] = useState('')
    const history = useHistory()
    const {currentUser, logout} = useAuth()

    async function handleLogOut(){
        setError('')
        try {
            await logout()
            history.push("/login")
        } catch{
            setError("Failed to Logout")
        }

    }
    
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/"><FcLock /></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/add">Add</Nav.Link>
                    <Nav.Link href="/generate">Generate</Nav.Link>
                </Nav>


                <span style={{color: "whitesmoke"}}>Welcome, {currentUser.email}</span>
                <Button variant="link" onClick={handleLogOut}>Log Out</Button>
            </Navbar>
            <div>
                {error && <Alert variant="danger">{error}</Alert>}
            </div>
            
        </>
    )
}
