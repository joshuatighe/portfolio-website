import { CircleHelp, Cloud, CloudFog, CloudLightning, CloudRainWind, CloudSnow, Sun, } from "lucide-react"


const WeatherIconHandler = ({ desc }: { desc: string }) => {
  switch (desc) {
    case 'thunderstorm':
      return <CloudLightning className="inline" />
    case 'drizzle':
      return <CloudRainWind className="inline" />
    case 'rain':
      return <CloudRainWind className="inline" />
    case 'snow':
      return <CloudSnow className="inline" />
    case 'atmosphere':
      return <CloudFog className="inline" />
    case 'clear':
      return <Sun className="inline" />
    case 'clouds':
      return <Cloud className="inline" />
    default:
      return <CircleHelp className="inline" />
  }
}

export default WeatherIconHandler