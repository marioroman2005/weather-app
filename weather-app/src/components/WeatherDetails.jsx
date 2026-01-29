export const WeatherDetails = ({ weather }) => {
    if (!weather) return null;

    const { main, wind } = weather;

    return (
        <div className="weather-details">
            <div className="detail-item">
                <div className="detail-label">💧 Humedad</div>
                <div className="detail-value">{main.humidity}%</div>
            </div>
            <div className="detail-item">
                <div className="detail-label">💨 Viento</div>
                <div className="detail-value">{wind.speed} m/s</div>
            </div>
            <div className="detail-item">
                <div className="detail-label">🌡️ Sensación</div>
                <div className="detail-value">{Math.round(main.feels_like)}°C</div>
            </div>
            <div className="detail-item">
                <div className="detail-label">⏲️ Presión</div>
                <div className="detail-value">{main.pressure} hPa</div>
            </div>
        </div>
    )
}