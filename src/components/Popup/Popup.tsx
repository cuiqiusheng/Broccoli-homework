import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

import './style.scss'

interface PopupProps {
    visible: boolean
    children?: any
    wrapClassName?: string
    bodyClassName?: string
    closable?: boolean
    onClose?: () => void
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
        <div className={classNames('popup', wrapClassName)} onTransitionEnd={onTransitionEnd}>
            <div className="popup-mask"></div>
            <div className={classNames('popup-content', aniClassName, bodyClassName)}>
                { children }
                { closable && <div className="popup-close-btn" onClick={onClose}>×</div> }
            </div>
        </div>,
        document.body,
    )
}

export default Popup
