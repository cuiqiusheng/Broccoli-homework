import React from 'react'

import Layout from '../../components/Layout'
import Button from '../../components/Button'

import './style.scss'

function Invitation() {
    return (
        <Layout>
            <div className="content">
                <div>
                    <div className="slogan">A better way <br/> to enjoy every day.</div>
                    <div className="subheading">Be the first to know when we launch.</div>
                    <div className="request-button"><Button>Request an invite</Button></div>
                </div>
            </div>
        </Layout>
    )
}

export default Invitation
