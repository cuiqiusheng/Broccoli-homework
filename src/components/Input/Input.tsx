import React from 'react'

import './style.scss'

export interface InputProps {
    placeholder?: string
    disabled?: boolean
    className?: string
}

export const defaultProps = {
    placeholder: 'input here',
    disabled: false,
}

function Input({
    placeholder,
    disabled,
    className
}: InputProps) {
    return (
        <input
            className={`input ${className}`}
            placeholder={placeholder || defaultProps.placeholder}
            disabled={disabled}
        />
    )
}

export default Input
