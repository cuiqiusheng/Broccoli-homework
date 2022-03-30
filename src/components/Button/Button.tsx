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
    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
    };

    const getSizeClass = () => {
        let result = 'button '

        if (disabled) result += ' disabled-button '

        if (size === 'large') {
            result += ' large-button '
        } else if (size === 'small') {
            result += ' small-button '
        } else {
            result += ' medium-button '
        }
        
        return result
    }

    return (
        <button className={`button ${getSizeClass()} ${className}`} onClick={handleClick}>
            { children }
        </button>
    )
}

export default Button
