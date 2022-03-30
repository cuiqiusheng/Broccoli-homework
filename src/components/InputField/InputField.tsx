import React from 'react'
import classNames from 'classnames'

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
                className={classNames('input-block', { 'error-input': errorMessage }, className)}
                { ...inputProps }
            />
            <div className="error-message">{ errorMessage }</div>
        </div>
    )
}

export default InputField
