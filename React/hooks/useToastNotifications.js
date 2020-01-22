import { useEffect, useState, useContext } from 'react'
import { ToastNotificationsContext } from '../providers/ToastNotificationsProvider'

export const TYPE_ERROR = 'TYPE_ERROR'
export const TYPE_SUCCESS = 'TYPE_SUCCESS'
export const TYPE_WARNING = 'TYPE_WARNING'

const useToastNotifications = () => {
    const notificationDispatcher = useContext(ToastNotificationsContext)
    const [notifications, setNotifications] = useState([])
    useEffect(() => (
        notificationDispatcher.subscribe((newNotifications) => {
            setNotifications(newNotifications)
        })
    ), [notificationDispatcher])

    const dispatchSuccess = (message) => (
        notificationDispatcher.dispatch({
            message,
            type: TYPE_SUCCESS,
        })
    )

    const dispatchError = (message) => (
        notificationDispatcher.dispatch({
            message,
            type: TYPE_ERROR,
        })
    )

    const dispatchWarning = (message) => (
        notificationDispatcher.dispatch({
            message,
            type: TYPE_WARNING,
        })
    )

    const removeNotification = (notification) => {
        notificationDispatcher.removeNotification(notification)
    }

    return {
        notifications,
        dispatchError,
        dispatchWarning,
        dispatchSuccess,
        dispatch: (data) => notificationDispatcher.dispatch(data),
        removeNotification,
    }
}

export default useToastNotifications
