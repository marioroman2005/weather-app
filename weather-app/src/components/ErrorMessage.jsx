export const ErrorMessage = ({ message }) => {
    if (!message) return null

    return (
        <div className="error-alert">
            <p>🚨 {message}</p>
        </div>
    )
}