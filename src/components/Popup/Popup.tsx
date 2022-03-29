import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

interface PopupProps {
    visible: boolean;
    onClose?: () => void;
    children?: any;
    wrapClassName?: string
    bodyClassName?: string
    closable?: boolean
}

const Popup = ({
    visible,
    children,
    closable,
    wrapClassName,
    bodyClassName,
    onClose,
}: PopupProps) => {
    const [active, setActive] = useState(false)
    const [aniClassName, setAniClassName] = useState('')

    const onTransitionEnd = () => {
        setAniClassName(visible ? 'enter-done' : 'exit-done')
        if (!visible) {
            setActive(false)
        }
    }

    useEffect(() => {
        if (visible) {
            setActive(true)
            setAniClassName('enter')
            setTimeout(() => {
                setAniClassName('enter-active')
            })
        } else {
            setAniClassName('exit')
            setTimeout(() => {
                setAniClassName('exit-active')
            })
        }
    }, [visible])

    if (!visible && !active) {
        return null
    }

    return ReactDOM.createPortal(
        <div className={`popup ${wrapClassName}`} onTransitionEnd={onTransitionEnd}>
            <div className="popup-mask"></div>
            <div className={`popup-content ${aniClassName} ${bodyClassName}`}>
                { children }
                { closable && <div className="popup-close-btn" onClick={onClose}>×</div> }
            </div>
        </div>,
        document.body,
    )
}

export default Popup
