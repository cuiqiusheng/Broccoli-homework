import React from 'react'

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

    const getSizeClass = () => {
        let result = 'button '

        switch (size) {
            case 'large':
                result += ' large-button '
                break
            case 'small':
                result += ' small-button '
                break
            default:
                result += ' medium-button '
        }

        if (disabled) result += ' disabled-button '
        
        return result
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        if (disabled) {
            e.preventDefault()
            return
        }
        (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e)
    }

    return (
        <button className={`button ${getSizeClass()} ${className}`} onClick={handleClick}>
            { children }
        </button>
    )
}

export default Button
