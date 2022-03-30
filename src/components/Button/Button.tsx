import React from 'react'
import classNames from 'classnames'

import './style.scss'

interface LayoutProps {
    children?: React.ReactNode
    className?: string
    size?: string
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLElement>
}

function Button({
    children,
    className,
    size,
    disabled,
    onClick,
}: LayoutProps) {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        if (disabled) {
            e.preventDefault()
            return
        }
        (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e)
    }

    return (
        <button
            className={classNames('button', {
                'large-button': size === 'large',
                'small-button': size === 'small',
                'medium-button': size === 'medium' || !size,
            }, className)}
            disabled={disabled}
            onClick={handleClick}
        >
            { children }
        </button>
    )
}

export default Button
