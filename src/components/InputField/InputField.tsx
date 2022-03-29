import React from 'react'

import Input, { InputProps } from '../Input'

import './style.scss'

interface InputFieldProps extends InputProps {
    errorMessage?: string
}

function InputField({
    className,
    placeholder,
    disabled,
    errorMessage,
}: InputFieldProps) {
    return (
        <div className="input-field">
            <Input
                className={`input-block ${className}`}
                placeholder={placeholder}
                disabled={disabled}
            />
            <div className="error-message">{ errorMessage }</div>
        </div>
    )
}

export default InputField
