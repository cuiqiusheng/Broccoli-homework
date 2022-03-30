import React from 'react'

import './style.scss'

export interface InputProps {
    className?: string
    placeholder?: string
    value?: string
    disabled?: boolean
    onChange?: undefined | ((event: React.ChangeEvent<HTMLInputElement>) => void),
}

export const defaultProps = {
    placeholder: 'input here',
}

function Input({
    className,
    placeholder,
    value,
    disabled,
    onChange,
}: InputProps) {
    return (
        <input
            className={`input ${className}`}
            placeholder={placeholder || defaultProps.placeholder}
            value={value}
            disabled={disabled}
            onChange={onChange}
        />
    )
}

export default Input
