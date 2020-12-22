import React from 'react'
import HeaderBar from '../components/HeaderBar'
import { Container } from 'react-bootstrap'
import AccountCard from '../components/AccountCard'

export default function Dashboard() {
    return (
        <>
            <HeaderBar/>
            <Container>
                <h1 className="text-center mt-3">Dashboard</h1>
                <AccountCard />
            </Container>
        </>
    )
}

