import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

import Button from '@/components/Button'
import Popup from '@/components/Popup'
import InputField from '@/components/InputField'
import { validate, handleRes, ResResult } from '@/utils'

import '@/page/Invitation/style.scss'

const URL = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth'

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

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setName(value)

        setNameErrorMessage(validate.name(value))
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setEmail(value)

        setEmailErrorMessage(validate.email(value))
        confirmEmail && setConfirmEmailErrorMessage(validate.confirmEmail(confirmEmail, value))
    }

    const handleConfirmEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setConfirmEmail(value)

        setConfirmEmailErrorMessage(validate.confirmEmail(value, email))
    }

    const resetFields = () => {
        setName('')
        setEmail('')
        setConfirmEmail('')
    }

    const handleSend = async () => {
        setResponseErrorMessage('')

        const valid = validateDone()

        if (valid) {
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
        }

    }

    const validateDone = (): boolean => {
        return !nameErrorMessage && !emailErrorMessage && !confirmEmailErrorMessage
    }

    const handleClose = () => {
        onClose && onClose()
        resetFields()
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
                onChange={handleNameChange}
            />
            <InputField
                placeholder="Email"
                errorMessage={emailErrorMessage}
                value={email}
                onChange={handleEmailChange}
            />
            <InputField
                placeholder="Confirm email"
                errorMessage={confirmEmailErrorMessage}
                value={confirmEmail}
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
