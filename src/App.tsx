import { useEffect, useState } from 'react'
import api, { WeatherResponse } from './api.ts'
import { City } from './types.ts'

const CITIES: Record<string, City> = {
  quilmes: {
    id: 'quilmes',
    name: 'Quilmes',
    lat: -34.7242636,
    lon: -58.2673194,
  },
  colegiales: {
    id: 'colegiales',
    name: 'Colegiales',
    lat: -34.5733963,
    lon: -58.441615,
  },
  trenel: {
    id: 'trenel',
    name: 'Trenel',
    lat: -35.7007911,
    lon: -64.152733,
  },
  'perito-moreno': {
    id: 'perito-moreno',
    name: 'Perito Moreno',
    lat: -41.1281942,
    lon: -71.4223144,
  }
}

function App() {
  const [status, setStatus] = useState<'pending' | 'resolved'>('pending')
  const [weather, setWeather] = useState<WeatherResponse | null>(null)
  const [city, setCity] = useState<City>(CITIES['quilmes'])

  function handleChangeCity(event: React.ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value as keyof typeof CITIES

    setCity(CITIES[city])
  }

  useEffect(() => {
    api.weather.fetch(city).then(setWeather)
    setStatus("resolved")
  }, [city])

  if(status === 'pending') {
    return <div>Cargando...</div>
  }

  if(!weather) {
    return <div>La ciudad no existe o no hay datos del clima</div>
  }

  return (
      <main>
        <select value={city?.id} onChange={handleChangeCity}>
          {Object.values(CITIES).map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
        <h1>{weather.city.name}</h1>
        <ul>
          {weather.forecast.map((fore, index) => (
            <li key={index}>
              {fore.date}: Min: {fore.min}°C, Max: {fore.max}°C
            </li>
          ))}
        </ul>
      </main>
  )
}

export default App
