import React, { ReactChildren, ReactChild } from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
