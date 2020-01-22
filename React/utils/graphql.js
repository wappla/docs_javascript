const UNAUTHENTICATED = 'UNAUTHENTICATED'

export const isUnauthenticatedError = (error) => (
    error.extensions.code === UNAUTHENTICATED
)

export const containsUnauthenticatedError = ({ networkError }) => (
    typeof networkError !== 'undefined'
    && typeof networkError.response !== 'undefined'
    && typeof networkError.response.status !== 'undefined'
    && networkError.response.status === 400
    && !!networkError.result.errors.find((error) => isUnauthenticatedError(error))
)

export const connectionToCollection = (connection = { edges: [] }) => (
    connection.edges.map((edge) => edge.node)
)

export const parseGraphQLErrors = (errors) => {
    const parsedErrors = errors.reduce((errorAcc, error) => {
        const { extensions } = error
        const hasValidation = extensions.category === 'validation'
        let fields = []
        if (hasValidation) {
            const { validation } = extensions
            fields = Object.keys(validation).reduce((fieldAcc, field) => {
                const mappedField = validation[field].map((message) => ({
                    path: field.replace('input.', ''),
                    message: message.replace('input.', ''),
                }))

                return [
                    ...fieldAcc,
                    ...mappedField,
                ]
            }, [])
        } else {
            const { message, path } = error
            fields = path.reduce((pathAcc, pathItem) => ([
                ...pathAcc,
                {
                    path: pathItem,
                    message,
                },
            ]), [])
        }

        return [
            ...errorAcc,
            ...fields,
        ]
    }, [])

    return parsedErrors
}
