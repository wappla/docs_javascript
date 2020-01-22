const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// Tests againts DD/MM/YYYY
const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/

export const isRequired = (value) => (
    typeof value !== 'undefined'
    && value !== null
    && value !== ''
    && value.length !== 0
)

export const isNumber = (value) => (
    typeof value === 'number' && !Number.isNaN(value)
)

export const isGreaterThan = (max) => (value) => value < max

export const isGreaterOrEqualThan = (max) => (value) => value >= max

export const isLessThan = (max) => (value) => value < max

export const isLessOrEqualThan = (max) => (value) => value <= max

export const isValidEmail = (value) => emailRegex.test(value)

export const isValidDate = (value) => dateRegex.test(value)

export const isLongerThan = (max) => (value) => value.length > max

export const isLongerOrEqualThan = (max) => (value) => value.length >= max

export const isShorterThan = (max) => (value) => value.length < max

export const isShorterOrEqualThan = (max) => (value) => value.length <= max
