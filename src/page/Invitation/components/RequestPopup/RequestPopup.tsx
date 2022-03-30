import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

import Button from '@/components/Button'
import Popup from '@/components/Popup'
import InputField from '@/components/InputField'
import { validate, handleRes, ResResult } from '@/utils'

import '@/page/Invitation/style.scss'

const URL = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth'

interface FormFields {
    name: string
    email: string
    confirmEmail: string
}

interface ValidateResult {
    success: boolean
    error: FormFields
}

interface RequestPopupProps {
    visible: boolean
    onClose?: Function
    onOk?: Function
}

function RequestPopup({
    visible,
    onClose,
    onOk,
}: RequestPopupProps) {

    const [ name, setName ] = useState<string>('')
    const [ email, setEmail ] = useState<string>('')
    const [ confirmEmail, setConfirmEmail ] = useState<string>('')
    const [ nameErrorMessage, setNameErrorMessage ] = useState<string>('')
    const [ emailErrorMessage, setEmailErrorMessage ] = useState<string>('')
    const [ confirmEmailErrorMessage, setConfirmEmailErrorMessage ] = useState<string>('')
    const [ responseErrorMessage, setResponseErrorMessage ] = useState<string>('')
    const [ loading, setLoading ] = useState<boolean>(false)

    useEffect(() => {
        resetFields()
    }, [visible])

    /**
     * on name form field change
     * @param e ChangeEvent
     */
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setName(value)

        setNameErrorMessage(validate.name(value))
    }

    /**
     * on email form field change
     * @param e ChangeEvent
     */
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setEmail(value)

        setEmailErrorMessage(validate.email(value))
        confirmEmail && setConfirmEmailErrorMessage(validate.confirmEmail(confirmEmail, value))
    }

    /**
     * on confirmEmail form field change
     * @param e ChangeEvent
     */
    const handleConfirmEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setConfirmEmail(value)

        setConfirmEmailErrorMessage(validate.confirmEmail(value, email))
    }

    /**
     * validate the whole form
     * @returns {ValidateResult} validate result
     */
    const validateAll = (): ValidateResult => {
        const error = {
            name: validate.name(name),
            email: validate.email(email),
            confirmEmail: validate.confirmEmail(email, confirmEmail),
        }

        setNameErrorMessage(error.name)
        setEmailErrorMessage(error.email)
        setConfirmEmailErrorMessage(error.confirmEmail)

        const success = !error.name && !error.email && !error.confirmEmail

        return { success, error }
    }

    /**
     * on tap send button
     */
    const handleSend = async () => {

        setResponseErrorMessage('')

        const { success } = validateAll()

        if (success) {
            setLoading(true)

            let result: ResResult
            try {
                const res: AxiosResponse = await axios.post(URL, { name, email })
                result = handleRes(res)
            } catch (error: any) {
                result = handleRes(error.response as AxiosResponse)
            } finally {
                setLoading(false)
            }

            const { success, errorMessage } = result
            if (success) {
                onOk && onOk()
            } else {
                setResponseErrorMessage(errorMessage)
            }
        } else {
            // TODO: it's better to toast fail reason here
        }
    }

    /**
     * on popup close
     */
    const handleClose = () => {
        onClose && onClose()
        resetFields()
    }

    /**
     * reset form fields and error messages
     */
    const resetFields = () => {
        setName('')
        setEmail('')
        setConfirmEmail('')

        setNameErrorMessage('')
        setEmailErrorMessage('')
        setConfirmEmailErrorMessage('')

        setResponseErrorMessage('')
    }

    return (
        <Popup
            bodyClassName="popup-body"
            visible={visible}
            closable
            onClose={handleClose}
        >
            <div className="popup-title">Reauest an invite</div>
            <InputField
                placeholder="Full name"
                errorMessage={nameErrorMessage}
                value={name}
                disabled={loading}
                onChange={handleNameChange}
            />
            <InputField
                placeholder="Email"
                errorMessage={emailErrorMessage}
                value={email}
                disabled={loading}
                onChange={handleEmailChange}
            />
            <InputField
                placeholder="Confirm email"
                errorMessage={confirmEmailErrorMessage}
                value={confirmEmail}
                disabled={loading}
                onChange={handleConfirmEmailChange}
            />

            <Button className="send-button" size="medium" disabled={loading} onClick={handleSend}>
                { loading ? 'Sending, please wait...' : 'Send' }
            </Button>

            { responseErrorMessage && <div className="response-error">{ responseErrorMessage }</div> }
        </Popup>
    )
}

export default RequestPopup
