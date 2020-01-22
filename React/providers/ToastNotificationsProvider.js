import React from 'react'

export const ToastNotificationsContext = React.createContext()

const ToastNotificationsProvider = ({
    dispatcher,
    ...props
}) => (
    <ToastNotificationsContext.Provider value={dispatcher} {...props} />
)

export default ToastNotificationsProvider
