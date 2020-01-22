/* eslint-disable max-classes-per-file */
// Remove this polyfill when the issue below is resolved
// https://github.com/jsdom/jsdom/issues/2156
class EventTargetPolyfill {
    constructor() {
        this.events = {}
    }

    addEventListener(type, listener) {
        if (typeof this.events[type] === 'undefined') {
            this.events[type] = []
        }
        this.events[type].push(listener)
    }

    removeEventListener(type, listener) {
        if (typeof this.events[type] !== 'undefined') {
            const index = this.events[type].indexOf(listener)
            if (index > -1) {
                this.events[type].splice(index, 1)
            }
        }
    }

    dispatchEvent(event) {
        const { type } = event
        if (typeof this.events[type] !== 'undefined') {
            this.events[type].forEach((listener) => {
                listener(event)
            })
        }
    }
}

const DEFAULT_DURATION = 5000

export class NotificationDispatcher extends EventTargetPolyfill {
    constructor(defaultDuration = DEFAULT_DURATION) {
        super()
        this.defaultDuration = defaultDuration
        this.notifications = []
    }

    createNotification(
        data,
        createdAt = Date.now(),
        duration = this.defaultDuration
    ) {
        return {
            data,
            createdAt,
            duration,
        }
    }

    removeNotification(notification) {
        const index = this.notifications.indexOf(notification)
        if (index !== -1) {
            this.notifications.splice(index, 1)
        }
        this.dispatchEvent({ type: 'changed' })
        this.dispatchEvent({ type: 'removed', notification })
    }

    dispatchNotification(notification) {
        this.notifications.push(notification)
        setTimeout(() => {
            this.removeNotification(notification)
        }, notification.duration)
        this.dispatchEvent({ type: 'changed' })
        this.dispatchEvent({ type: 'added', notification })
    }

    dispatch(data, createdAt, duration) {
        const notification = this.createNotification(data, createdAt, duration)
        this.dispatchNotification(notification)
    }

    subscribe(listener) {
        this.addEventListener('changed', () => listener([...this.notifications]))
        return () => {
            this.removeEventListener('changed', () => listener([...this.notifications]))
        }
    }
}

let notificationDispatcher = null
export const getNotificationDispatcher = () => {
    if (notificationDispatcher === null) {
        notificationDispatcher = new NotificationDispatcher()
        return notificationDispatcher
    }
    return notificationDispatcher
}
