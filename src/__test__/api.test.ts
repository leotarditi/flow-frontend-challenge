import {describe, expect, test} from "vitest"
import { formatWeather, kelvinToCelcius, RawWeather, WeatherResponse } from "../api"

describe('kelvinToCelcius', () => {

    test("should convert temperatures from kelvin to celsius", () => {
        expect(kelvinToCelcius(288.24)).toBe(15);
        expect(kelvinToCelcius(290.24)).toBe(17);
        expect(kelvinToCelcius(290.5)).toBe(17);
    })

})

describe('formatWeather', () => {
    const RESPONSE: RawWeather = {
        cod: "200",
        message: 0,
        cnt: 40,
        list: [
          {
            dt: 1734566400,
            main: {
              temp: 298.87,
              feels_like: 299.04,
              temp_min: 297.12,
              temp_max: 298.87,
              pressure: 1010,
              sea_level: 1010,
              grnd_level: 1010,
              humidity: 59,
              temp_kf: 1.75
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 1.82,
              deg: 198,
              gust: 3.83
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n"
            },
            dt_txt: "2024-12-19 00:00:00"
          },
          {
            dt: 1734577200,
            main: {
              temp: 297.51,
              feels_like: 297.59,
              temp_min: 296.39,
              temp_max: 297.51,
              pressure: 1010,
              sea_level: 1010,
              grnd_level: 1008,
              humidity: 61,
              temp_kf: 1.12
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 3.79,
              deg: 195,
              gust: 6.25
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n"
            },
            dt_txt: "2024-12-19 03:00:00"
          },
          {
            dt: 1734588000,
            main: {
              temp: 295.65,
              feels_like: 295.6,
              temp_min: 295.65,
              temp_max: 295.65,
              pressure: 1009,
              sea_level: 1009,
              grnd_level: 1008,
              humidity: 63,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 3.34,
              deg: 185,
              gust: 7.18
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n"
            },
            dt_txt: "2024-12-19 06:00:00"
          },
          {
            dt: 1734598800,
            main: {
              temp: 294.63,
              feels_like: 294.45,
              temp_min: 294.63,
              temp_max: 294.63,
              pressure: 1010,
              sea_level: 1010,
              grnd_level: 1009,
              humidity: 62,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 3.9,
              deg: 175,
              gust: 6.09
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-19 09:00:00"
          },
          {
            dt: 1734609600,
            main: {
              temp: 294.31,
              feels_like: 294.57,
              temp_min: 294.31,
              temp_max: 294.31,
              pressure: 1011,
              sea_level: 1011,
              grnd_level: 1010,
              humidity: 80,
              temp_kf: 0
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 4.07,
              deg: 113,
              gust: 5.93
            },
            visibility: 10000,
            pop: 0.45,
            rain: {
              '3h': 0.69
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-19 12:00:00"
          },
          {
            dt: 1734620400,
            main: {
              temp: 296.62,
              feels_like: 296.77,
              temp_min: 296.62,
              temp_max: 296.62,
              pressure: 1010,
              sea_level: 1010,
              grnd_level: 1009,
              humidity: 67,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 3.48,
              deg: 73,
              gust: 3.25
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-19 15:00:00"
          },
          {
            dt: 1734631200,
            main: {
              temp: 297.62,
              feels_like: 297.74,
              temp_min: 297.62,
              temp_max: 297.62,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 1006,
              humidity: 62,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 3.4,
              deg: 37,
              gust: 1.78
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-19 18:00:00"
          },
          {
            dt: 1734642000,
            main: {
              temp: 298.99,
              feels_like: 299.07,
              temp_min: 298.99,
              temp_max: 298.99,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 1004,
              humidity: 55,
              temp_kf: 0
            },
            weather: [
              {
                id: 801,
                main: "Clouds",
                description: "few clouds",
                icon: "02d"
              }
            ],
            clouds: {
              all: 13
            },
            wind: {
              speed: 2.89,
              deg: 68,
              gust: 1.92
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-19 21:00:00"
          },
          {
            dt: 1734652800,
            main: {
              temp: 296.37,
              feels_like: 296.65,
              temp_min: 296.37,
              temp_max: 296.37,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 1003,
              humidity: 73,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
              }
            ],
            clouds: {
              all: 7
            },
            wind: {
              speed: 5.69,
              deg: 65,
              gust: 8.49
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n"
            },
            dt_txt: "2024-12-20 00:00:00"
          },
          {
            dt: 1734663600,
            main: {
              temp: 296.31,
              feels_like: 296.61,
              temp_min: 296.31,
              temp_max: 296.31,
              pressure: 1003,
              sea_level: 1003,
              grnd_level: 1002,
              humidity: 74,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
              }
            ],
            clouds: {
              all: 0
            },
            wind: {
              speed: 5.28,
              deg: 21,
              gust: 10.69
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n"
            },
            dt_txt: "2024-12-20 03:00:00"
          },
          {
            dt: 1734674400,
            main: {
              temp: 296.59,
              feels_like: 296.71,
              temp_min: 296.59,
              temp_max: 296.59,
              pressure: 1002,
              sea_level: 1002,
              grnd_level: 1001,
              humidity: 66,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
              }
            ],
            clouds: {
              all: 5
            },
            wind: {
              speed: 4.8,
              deg: 330,
              gust: 14.39
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n"
            },
            dt_txt: "2024-12-20 06:00:00"
          },
          {
            dt: 1734685200,
            main: {
              temp: 296.18,
              feels_like: 296.24,
              temp_min: 296.18,
              temp_max: 296.18,
              pressure: 1003,
              sea_level: 1003,
              grnd_level: 1002,
              humidity: 65,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 89
            },
            wind: {
              speed: 3.65,
              deg: 318,
              gust: 11.42
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-20 09:00:00"
          },
          {
            dt: 1734696000,
            main: {
              temp: 299.99,
              feels_like: 300.25,
              temp_min: 299.99,
              temp_max: 299.99,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 1002,
              humidity: 47,
              temp_kf: 0
            },
            weather: [
              {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 79
            },
            wind: {
              speed: 3.85,
              deg: 274,
              gust: 5.81
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-20 12:00:00"
          },
          {
            dt: 1734706800,
            main: {
              temp: 302.69,
              feels_like: 301.31,
              temp_min: 302.69,
              temp_max: 302.69,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 1004,
              humidity: 27,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 96
            },
            wind: {
              speed: 6.94,
              deg: 219,
              gust: 11.37
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-20 15:00:00"
          },
          {
            dt: 1734717600,
            main: {
              temp: 299.61,
              feels_like: 299.61,
              temp_min: 299.61,
              temp_max: 299.61,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 1005,
              humidity: 39,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 97
            },
            wind: {
              speed: 6.38,
              deg: 231,
              gust: 13.06
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-20 18:00:00"
          },
          {
            dt: 1734728400,
            main: {
              temp: 302.99,
              feels_like: 301.51,
              temp_min: 302.99,
              temp_max: 302.99,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 1004,
              humidity: 26,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 93
            },
            wind: {
              speed: 3.35,
              deg: 256,
              gust: 6.66
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-20 21:00:00"
          },
          {
            dt: 1734739200,
            main: {
              temp: 297.09,
              feels_like: 296.74,
              temp_min: 297.09,
              temp_max: 297.09,
              pressure: 1009,
              sea_level: 1009,
              grnd_level: 1008,
              humidity: 46,
              temp_kf: 0
            },
            weather: [
              {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
              }
            ],
            clouds: {
              all: 57
            },
            wind: {
              speed: 7.46,
              deg: 120,
              gust: 9.1
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n"
            },
            dt_txt: "2024-12-21 00:00:00"
          },
          {
            dt: 1734750000,
            main: {
              temp: 293.94,
              feels_like: 293.59,
              temp_min: 293.94,
              temp_max: 293.94,
              pressure: 1012,
              sea_level: 1012,
              grnd_level: 1011,
              humidity: 58,
              temp_kf: 0
            },
            weather: [
              {
                id: 801,
                main: "Clouds",
                description: "few clouds",
                icon: "02n"
              }
            ],
            clouds: {
              all: 14
            },
            wind: {
              speed: 7.34,
              deg: 110,
              gust: 9.8
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n"
            },
            dt_txt: "2024-12-21 03:00:00"
          },
          {
            dt: 1734760800,
            main: {
              temp: 290.55,
              feels_like: 289.65,
              temp_min: 290.55,
              temp_max: 290.55,
              pressure: 1014,
              sea_level: 1014,
              grnd_level: 1013,
              humidity: 50,
              temp_kf: 0
            },
            weather: [
              {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
              }
            ],
            clouds: {
              all: 55
            },
            wind: {
              speed: 5.92,
              deg: 132,
              gust: 8.98
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n"
            },
            dt_txt: "2024-12-21 06:00:00"
          },
          {
            dt: 1734771600,
            main: {
              temp: 289.58,
              feels_like: 288.69,
              temp_min: 289.58,
              temp_max: 289.58,
              pressure: 1016,
              sea_level: 1016,
              grnd_level: 1015,
              humidity: 54,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 97
            },
            wind: {
              speed: 3.43,
              deg: 152,
              gust: 4.54
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-21 09:00:00"
          },
          {
            dt: 1734782400,
            main: {
              temp: 292.01,
              feels_like: 291.18,
              temp_min: 292.01,
              temp_max: 292.01,
              pressure: 1018,
              sea_level: 1018,
              grnd_level: 1017,
              humidity: 47,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 98
            },
            wind: {
              speed: 1.42,
              deg: 100,
              gust: 1.53
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-21 12:00:00"
          },
          {
            dt: 1734793200,
            main: {
              temp: 294.26,
              feels_like: 293.68,
              temp_min: 294.26,
              temp_max: 294.26,
              pressure: 1016,
              sea_level: 1016,
              grnd_level: 1015,
              humidity: 48,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 4.29,
              deg: 42,
              gust: 2.99
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-21 15:00:00"
          },
          {
            dt: 1734804000,
            main: {
              temp: 295.71,
              feels_like: 295.14,
              temp_min: 295.71,
              temp_max: 295.71,
              pressure: 1014,
              sea_level: 1014,
              grnd_level: 1013,
              humidity: 43,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 99
            },
            wind: {
              speed: 5.49,
              deg: 47,
              gust: 4.61
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-21 18:00:00"
          },
          {
            dt: 1734814800,
            main: {
              temp: 294.89,
              feels_like: 294.45,
              temp_min: 294.89,
              temp_max: 294.89,
              pressure: 1014,
              sea_level: 1014,
              grnd_level: 1013,
              humidity: 51,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
              }
            ],
            clouds: {
              all: 3
            },
            wind: {
              speed: 7.43,
              deg: 86,
              gust: 7.66
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-21 21:00:00"
          },
          {
            dt: 1734825600,
            main: {
              temp: 293.61,
              feels_like: 293.02,
              temp_min: 293.61,
              temp_max: 293.61,
              pressure: 1015,
              sea_level: 1015,
              grnd_level: 1014,
              humidity: 50,
              temp_kf: 0
            },
            weather: [
              {
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03n"
              }
            ],
            clouds: {
              all: 34
            },
            wind: {
              speed: 7.95,
              deg: 90,
              gust: 11.04
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n"
            },
            dt_txt: "2024-12-22 00:00:00"
          },
          {
            dt: 1734836400,
            main: {
              temp: 292.86,
              feels_like: 292.3,
              temp_min: 292.86,
              temp_max: 292.86,
              pressure: 1016,
              sea_level: 1016,
              grnd_level: 1015,
              humidity: 54,
              temp_kf: 0
            },
            weather: [
              {
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03n"
              }
            ],
            clouds: {
              all: 42
            },
            wind: {
              speed: 8.66,
              deg: 62,
              gust: 11.23
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n"
            },
            dt_txt: "2024-12-22 03:00:00"
          },
          {
            dt: 1734847200,
            main: {
              temp: 291.25,
              feels_like: 290.84,
              temp_min: 291.25,
              temp_max: 291.25,
              pressure: 1016,
              sea_level: 1016,
              grnd_level: 1015,
              humidity: 66,
              temp_kf: 0
            },
            weather: [
              {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
              }
            ],
            clouds: {
              all: 58
            },
            wind: {
              speed: 6.54,
              deg: 35,
              gust: 9.78
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n"
            },
            dt_txt: "2024-12-22 06:00:00"
          },
          {
            dt: 1734858000,
            main: {
              temp: 291.44,
              feels_like: 291.13,
              temp_min: 291.44,
              temp_max: 291.44,
              pressure: 1018,
              sea_level: 1018,
              grnd_level: 1017,
              humidity: 69,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 99
            },
            wind: {
              speed: 4.96,
              deg: 10,
              gust: 7.08
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-22 09:00:00"
          },
          {
            dt: 1734868800,
            main: {
              temp: 292.96,
              feels_like: 292.59,
              temp_min: 292.96,
              temp_max: 292.96,
              pressure: 1018,
              sea_level: 1018,
              grnd_level: 1016,
              humidity: 61,
              temp_kf: 0
            },
            weather: [
              {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 58
            },
            wind: {
              speed: 6.26,
              deg: 9,
              gust: 8.2
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-22 12:00:00"
          },
          {
            dt: 1734879600,
            main: {
              temp: 297.41,
              feels_like: 296.94,
              temp_min: 297.41,
              temp_max: 297.41,
              pressure: 1017,
              sea_level: 1017,
              grnd_level: 1016,
              humidity: 40,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
              }
            ],
            clouds: {
              all: 5
            },
            wind: {
              speed: 4.27,
              deg: 7,
              gust: 6.23
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-22 15:00:00"
          },
          {
            dt: 1734890400,
            main: {
              temp: 300.46,
              feels_like: 299.69,
              temp_min: 300.46,
              temp_max: 300.46,
              pressure: 1015,
              sea_level: 1015,
              grnd_level: 1014,
              humidity: 28,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
              }
            ],
            clouds: {
              all: 5
            },
            wind: {
              speed: 2.75,
              deg: 26,
              gust: 4.16
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-22 18:00:00"
          },
          {
            dt: 1734901200,
            main: {
              temp: 300.51,
              feels_like: 299.93,
              temp_min: 300.51,
              temp_max: 300.51,
              pressure: 1013,
              sea_level: 1013,
              grnd_level: 1012,
              humidity: 33,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
              }
            ],
            clouds: {
              all: 2
            },
            wind: {
              speed: 3.76,
              deg: 56,
              gust: 4.16
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-22 21:00:00"
          },
          {
            dt: 1734912000,
            main: {
              temp: 296.54,
              feels_like: 296.63,
              temp_min: 296.54,
              temp_max: 296.54,
              pressure: 1013,
              sea_level: 1013,
              grnd_level: 1012,
              humidity: 65,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
              }
            ],
            clouds: {
              all: 2
            },
            wind: {
              speed: 5.98,
              deg: 71,
              gust: 9.96
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n"
            },
            dt_txt: "2024-12-23 00:00:00"
          },
          {
            dt: 1734922800,
            main: {
              temp: 297.19,
              feels_like: 296.98,
              temp_min: 297.19,
              temp_max: 297.19,
              pressure: 1014,
              sea_level: 1014,
              grnd_level: 1013,
              humidity: 51,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
              }
            ],
            clouds: {
              all: 3
            },
            wind: {
              speed: 7.09,
              deg: 32,
              gust: 14.2
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n"
            },
            dt_txt: "2024-12-23 03:00:00"
          },
          {
            dt: 1734933600,
            main: {
              temp: 295.36,
              feels_like: 295.18,
              temp_min: 295.36,
              temp_max: 295.36,
              pressure: 1014,
              sea_level: 1014,
              grnd_level: 1013,
              humidity: 59,
              temp_kf: 0
            },
            weather: [
              {
                id: 801,
                main: "Clouds",
                description: "few clouds",
                icon: "02n"
              }
            ],
            clouds: {
              all: 19
            },
            wind: {
              speed: 7.72,
              deg: 23,
              gust: 13.01
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n"
            },
            dt_txt: "2024-12-23 06:00:00"
          },
          {
            dt: 1734944400,
            main: {
              temp: 293.95,
              feels_like: 293.94,
              temp_min: 293.95,
              temp_max: 293.95,
              pressure: 1015,
              sea_level: 1015,
              grnd_level: 1014,
              humidity: 71,
              temp_kf: 0
            },
            weather: [
              {
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d"
              }
            ],
            clouds: {
              all: 36
            },
            wind: {
              speed: 7.38,
              deg: 11,
              gust: 14.01
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-23 09:00:00"
          },
          {
            dt: 1734955200,
            main: {
              temp: 295.75,
              feels_like: 295.74,
              temp_min: 295.75,
              temp_max: 295.75,
              pressure: 1016,
              sea_level: 1016,
              grnd_level: 1015,
              humidity: 64,
              temp_kf: 0
            },
            weather: [
              {
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d"
              }
            ],
            clouds: {
              all: 31
            },
            wind: {
              speed: 6.81,
              deg: 8,
              gust: 10.3
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-23 12:00:00"
          },
          {
            dt: 1734966000,
            main: {
              temp: 300.7,
              feels_like: 300.32,
              temp_min: 300.7,
              temp_max: 300.7,
              pressure: 1015,
              sea_level: 1015,
              grnd_level: 1014,
              humidity: 38,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 99
            },
            wind: {
              speed: 3.5,
              deg: 2,
              gust: 7.3
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-23 15:00:00"
          },
          {
            dt: 1734976800,
            main: {
              temp: 301.72,
              feels_like: 300.73,
              temp_min: 301.72,
              temp_max: 301.72,
              pressure: 1012,
              sea_level: 1012,
              grnd_level: 1010,
              humidity: 31,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 2.23,
              deg: 75,
              gust: 3.07
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-23 18:00:00"
          },
          {
            dt: 1734987600,
            main: {
              temp: 301.35,
              feels_like: 300.92,
              temp_min: 301.35,
              temp_max: 301.35,
              pressure: 1009,
              sea_level: 1009,
              grnd_level: 1008,
              humidity: 39,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 5.9,
              deg: 77,
              gust: 7.65
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d"
            },
            dt_txt: "2024-12-23 21:00:00"
          }
        ],
        city: {
          id: 3429652,
          name: "Quilmes",
          coord: {
            lat: -34.7243,
            lon: -58.2673
          },
          country: "AR",
          population: 518788,
          timezone: -10800,
          sunrise: 1734510929,
          sunset: 1734563063
        }
      }

    test("should format raw weather correclty", () => {
        const actual = formatWeather(RESPONSE)
        const expected: WeatherResponse = {
            city: {
                id: '3429652',
                name: 'Quilmes'
            },
            forecast: [
                {date: '18/12/2024', min: 24, max: 26},
                {date: '19/12/2024', min: 23, max: 23},
                {date: '20/12/2024', min: 24, max: 24},
                {date: '21/12/2024', min: 20, max: 20},
                {date: '22/12/2024', min: 23, max: 23}
            ]
        }

        expect(actual).toStrictEqual(expected);
    })

})