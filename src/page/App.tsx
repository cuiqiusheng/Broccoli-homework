import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Invitation from './Invitation'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invitation" element={<Invitation />} />
        </Routes>
    )
}

export default App
