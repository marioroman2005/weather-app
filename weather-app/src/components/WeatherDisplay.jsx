export const WeatherDisplay = ({ weather }) => {
    if (!weather) return null

    const { name, main, weather: weatherInfo } = weather
    const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`

    return (
        <div className="weather-card">
            <h2>{name}</h2>
            <img src={iconUrl} alt={weatherInfo[0].description} />
            <p className="temp">{Math.round(main.temp)}ºC</p>
            <p className="description">{weatherInfo[0].description}</p>
        </div>
    )
}