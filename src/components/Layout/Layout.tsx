import React, { ReactChildren, ReactChild } from 'react'

import Header from '../Header'
import Footer from '../Footer'

interface LayoutProps {
    children?: ReactChild | ReactChildren
}

function App(props: LayoutProps) {
    return (
        <>
            <Header />
            { props.children }
            <Footer />
        </>
    )
}

export default App
