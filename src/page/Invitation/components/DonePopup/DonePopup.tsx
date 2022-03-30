import React from 'react'

import Button from '../../../../components/Button'
import Popup from '../../../../components/Popup'

import '../../style.scss'

interface DonePopupProps {
    visible: boolean
    onClose?: Function
    onOk?: Function
}

function DonePopup({
    visible,
    onClose,
    onOk,
}: DonePopupProps) {

    const handleOk = async () => {
        onOk && onOk()
    }

    const handleClose = () => {
        onClose && onClose()
    }

    return (
        <Popup
            bodyClassName="popup-body"
            visible={visible}
            closable
            onClose={handleClose}
        >
            <div className="popup-title">Reauest an invite</div>
            <div className="popup-tip">You will be one of the first to experience <br/> Broccoli & Co. when we launch.</div>
            <Button className="send-button" size="medium" onClick={handleOk}>OK</Button>
        </Popup>
    )
}

export default DonePopup
