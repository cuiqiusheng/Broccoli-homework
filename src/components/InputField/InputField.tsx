import React from 'react'

import Input, { InputProps } from '@/components/Input'

import './style.scss'

interface InputFieldProps extends InputProps {
    errorMessage?: string
}

function InputField({
    errorMessage,
    className,
    ...inputProps
}: InputFieldProps) {
    return (
        <div className="input-field">
            <Input
                className={`input-block ${errorMessage ? 'error-input' : ''} ${className}`}
                { ...inputProps }
            />
            <div className="error-message">{ errorMessage }</div>
        </div>
    )
}

export default InputField
