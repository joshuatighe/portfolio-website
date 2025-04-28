import Line from '@/app/ui/Line'
import WeatherIcon from '@/app/ui/WeatherIcon'

import { Sun, CloudSun } from 'lucide-react'

const WeatherLines = async () => {
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${process.env.WEATHER_API_KEY}`

  let dublin     = await fetch(`${baseUrl}&lat=${53.3498}&lon=${-6.2603}`).then(res => res.json())
  let dublinTemp = Math.round(dublin.main.temp)
  let dublinDesc = dublin.weather[0].description

  let nd         = await fetch(`${baseUrl}&lat=${41.6764}&lon=${-86.2520}`).then(res => res.json())
  let ndTemp     = Math.round(nd.main.temp)
  let ndDesc     = nd.weather[0].description

  console.log(dublin)
  console.log(nd)

  return (
    <>
      <Line number={'8'} status={'error'}>
        <div className="text-[#928374]">
          // <span className="italic font-extrabold">
            dublin:
          </span>      <WeatherIcon desc={dublinDesc} /> {dublinTemp}C, {dublinDesc}
        </div>
      </Line>
      <Line number={'9'} status={'none'}>
        <div className="text-[#928374]">
          // <span className="italic font-extrabold">
            notre dame:
          </span>  <WeatherIcon desc={ndDesc} /> {ndTemp}C, {ndDesc}
        </div>
      </Line>
    </>
  )
}

export default WeatherLines