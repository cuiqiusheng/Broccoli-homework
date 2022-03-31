import { AxiosResponse } from 'axios'

/**
 * get prototype
 * @param val 
 * @returns prototype
 */
function getPrototype(val: any) {
    return Object.prototype.toString.call(val)
}

/**
 * validate email is valid or not
 * @param {string} val email address
 * @returns {boolean} isValid
 */
const validateEmail = (val: string): boolean => {
    if (!val || getPrototype(val) !== '[object String]') {
        throw Error('[validateEmail] param is not string')
    }

    const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    return reg.test(val)
}

/**
 * validate fileds Class
 */
export const validate = {
    name: (val: string): string => {
        if (!val) {
            return 'Full name is required.'
        } else {
            if (val.length < 3) return 'Need 3 charactors at least.'
            return ''
        }
    },
    email: (val: string): string => {
        if (!val) {
            return 'Email is required.'
        } else {
            if (!validateEmail(val)) {
                return 'Email is not valid.'
            } else {
                return ''
            }
        }
    },
    confirmEmail: (val: string, email: string): string => {
        if (!val) {
            return 'Please confim your email.'
        } else {
            if (val !== email) {
                return 'The two emails do not match.'
            } else {
                return ''
            }
        }
    },
}

export interface ResResult {
    success: boolean
    errorMessage: string
    data: any
}

/**
 * deal axios response
 * @param {AxiosResponse} res axios response
 * @returns {ResResult} result
 */
export const handleRes = (res: AxiosResponse): ResResult => {
    const { status, statusText, data } = res
    if (status === 200) {
        return {
            success: true,
            errorMessage: '',
            data,
        }
    } else {
        return {
            success: false,
            errorMessage: data.errorMessage || statusText,
            data,
        }
    }
}
