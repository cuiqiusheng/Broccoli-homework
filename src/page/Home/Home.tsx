import React from 'react'
import { Navigate } from 'react-router-dom'

function Home() {
    return (
        <Navigate to="/invitation" replace />
    )
}

export default Home
