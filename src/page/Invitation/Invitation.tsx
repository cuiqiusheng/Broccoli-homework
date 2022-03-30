import React, { useState } from 'react'

import Layout from '@/components/Layout'
import Button from '@/components/Button'

import RequestPopup from './components/RequestPopup'
import DonePopup from './components/DonePopup'

import './style.scss'

function Invitation() {

    const [requestPopupVisible, setRequestPopupVisible] = useState<boolean>(false);
    const [donePopupVisible, setDonePopupVisible] = useState<boolean>(false);

    /**
     * when request success, close request popup, open confirm popup
     */
    const handleRequestPopupOk = () => {
        setRequestPopupVisible(false)
        setDonePopupVisible(true)
    }

    return (
        <>
            <Layout>
                <div className="content">
                    <div>
                        <div className="slogan">A better way <br /> to enjoy every day.</div>
                        <div className="subheading">Be the first to know when we launch.</div>
                        <div className="request-button">
                            <Button size="large" onClick={() => setRequestPopupVisible(true)}>Request an invite</Button>
                        </div>
                    </div>
                </div>
            </Layout >

            <RequestPopup visible={requestPopupVisible} onClose={() => setRequestPopupVisible(false)} onOk={handleRequestPopupOk} />
            <DonePopup visible={donePopupVisible} onClose={() => setDonePopupVisible(false)} onOk={() => setDonePopupVisible(false)} />
        </>
    )
}

export default Invitation
