import { useState } from "react"

export const SearchBar = ({ onSearch }) => {

    const [city, setCity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (city.trim().length === 0) return

        onSearch(city)
        setCity('')
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Buscar ciudad.."
            />
            <button type="submit">Buscar</button>
        </form>
    )
}