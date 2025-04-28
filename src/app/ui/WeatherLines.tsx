import Line from '@/app/ui/Line'
import WeatherIcon from '@/app/ui/WeatherIcon'

const WeatherLines = async () => {
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${process.env.WEATHER_API_KEY}`

  const fetchWeather = async (lat: number, lon: number) => {
    try {
      const res = await fetch(`${baseUrl}&lat=${lat}&lon=${lon}`)
      if (!res.ok) throw new Error('weather fetch failed')
      const data = await res.json()
      return {
        temp: Math.round(data.main?.temp) || 0,
        desc: data.weather?.[0]?.description || 'n/a',
      }
    } catch (err) {
      console.error(err)
      return { temp: 0, desc: 'n/a', }
    }
  }

  const dublin = await fetchWeather(53.3498, -6.2603)
  const nd     = await fetchWeather(41.6764, -86.2520)

  return (
    <>
      <Line number={'8'} status={'error'}>
        <div className="text-[#928374]">
          // <span className="italic font-extrabold">
            dublin:
          </span>      <WeatherIcon desc={dublin.desc} /> {dublin.temp}C, {dublin.desc}
        </div>
      </Line>
      <Line number={'9'} status={'none'}>
        <div className="text-[#928374]">
          // <span className="italic font-extrabold">
            notre dame:
          </span>  <WeatherIcon desc={nd.desc} /> {nd.temp}C, {nd.desc}
        </div>
      </Line>
    </>
  )
}

export default WeatherLines