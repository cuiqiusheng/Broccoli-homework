import React, { useState } from 'react'

import Layout from '../../components/Layout'
import Button from '../../components/Button'
import Popup from '../../components/Popup'
import InputField from '../../components/InputField'

import './style.scss'

function Invitation() {

    const [ visible, setVisible ] = useState<boolean>(true);

    return (
        <>
            <Layout>
                <div className="content">
                    <div>
                        <div className="slogan">A better way <br /> to enjoy every day.</div>
                        <div className="subheading">Be the first to know when we launch.</div>
                        <div className="request-button">
                            <Button size="large" onClick={() => setVisible(true)}>Request an invite</Button>
                        </div>
                    </div>
                </div>
            </Layout >

            <Popup
                bodyClassName="popup-body"
                visible={visible}
                closable
                onClose={() => setVisible(false)}
            >
                <div className="popup-title">Reauest an invite</div>
                <InputField placeholder="Full name" errorMessage="test error" />
                <InputField placeholder="Email" errorMessage="test error" />
                <InputField placeholder="Confirm email" errorMessage="test error" />

                <Button className="send-button" size="medium">Send</Button>
            </Popup>
        </>
    )
}

export default Invitation
