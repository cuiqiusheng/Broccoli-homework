import React from 'react'

import './style.scss'

interface LayoutProps {
    children?: React.ReactNode
    className?: string
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLElement>
}

function Button(props: LayoutProps) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        const { onClick, disabled } = props;
        if (disabled) {
            e.preventDefault();
            return;
        }
        (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
    };

    return (
        <button className="button" onClick={handleClick}>
            {props.children}
        </button>
    )
}

export default Button
