import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div>这里是首页</div>
            <br />
            <Link to="/invitation">to invitation</Link>
        </>
    )
}

export default Home
