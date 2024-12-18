import { City } from "./types";

type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  
  type Main = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  
  type Clouds = {
    all: number;
  };
  
  type Wind = {
    speed: number;
    deg: number;
    gust: number;
  };
  
  type Rain = {
    '3h': number;
  };
  
  type Sys = {
    pod: string;
  };
  
  type CityCoord = {
    lat: number;
    lon: number;
  };
  
  type WeatherCity = {
    id: number;
    name: string;
    coord: CityCoord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
  
  type WeatherList = {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    rain: Rain;
    sys: Sys;
    dt_txt: string;
  };
  
  export type RawWeather = {
    cod: string;
    message: number;
    cnt: number;
    list: WeatherList[];
    city: WeatherCity;
  };
  
  
  export type WeatherResponse = {
    city: {
        id: string;
        name: string;
    },
    forecast: {
        date: string;
        min: number;
        max: number;
    }[]
  };

  export function kelvinToCelcius(temp: number): number {
    return Math.round(temp - 273.15)
  }

  export function formatWeather(weather: RawWeather): WeatherResponse {
    const {0: first, 8: second, 16: third, 24: fourth, 32: fifth} = weather.list
        
    return {
        city: {
            id: String(weather.city.id),
            name:  weather.city.name
        },
        forecast: [first, second, third, fourth, fifth].map((fore) => ({
            date: new Date(fore.dt * 1000).toLocaleDateString('es-AR'),
            min: kelvinToCelcius(fore.main.temp_min),
            max: kelvinToCelcius(fore.main.temp_max)
        }))
    }
  }
  
  const api = {
    weather: {
      fetch: async (city: City): Promise<WeatherResponse> => {
        const request = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${import.meta.env.VITE_API_KEY_OPENWEATHER}`)
        const response: RawWeather = await request.json()
        
        return formatWeather(response)
      }
    }
  };
  
  export default api;
  