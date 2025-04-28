import { Sun, CloudSun, Cloud, Cloudy, CloudRain, CloudSunRain, Zap, Snowflake, CloudFog } from 'lucide-react'

const WeatherIcon = ({ desc }: { desc: string }) => {
  switch (desc) {
    case 'clear sky':
      return <Sun className="inline" />
    case 'few clouds':
      return <CloudSun className="inline" />
    case 'scattered clouds':
      return <Cloud className="inline" />
    case 'broken clouds':
      return <Cloudy className="inline" />
    case 'shower rain':
      return <CloudRain className="inline" />
    case 'rain':
      return <CloudSunRain className="inline" />
    case 'thunderstorm':
      return <Zap className="inline" />
    case 'snow':
      return <Snowflake className="inline" />
    case 'mist':
      return <CloudFog className="inline" />
    default:
      return <span>?</span>
  }
}

export default WeatherIcon