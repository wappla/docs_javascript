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
        const { extensions, message } = error
        const hasValidation = extensions.category === 'validation'
        let formErrors = []
        if (hasValidation) {
            // Get all validation errors
            const { validation } = extensions
            formErrors = Object.keys(validation).reduce((fieldAcc, field) => {
                const mappedField = validation[field].map((validationMessage) => ({
                    path: field.replace('input.', ''),
                    message: validationMessage.replace('input.', ''),
                }))

                return [
                    ...fieldAcc,
                    ...mappedField,
                ]
            }, [])
        } else {
            // Map general errors to path for mutation name
            const { path } = error
            formErrors = path.reduce((pathAcc, pathItem) => ([
                ...pathAcc,
                {
                    path: pathItem,
                    message,
                },
            ]), [])
        }

        return {
            formErrors: [...errorAcc.formErrors, ...formErrors],
            generalErrors: [...errorAcc.generalErrors, [message]],
        }
    }, {
        formErrors: [],
        generalErrors: [],
    })

    return parsedErrors
}
