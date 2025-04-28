import Line         from '@/app/ui/Line'
import BlankLine    from '@/app/ui/BlankLine'
import Footer       from '@/app/ui/Footer'
import WeatherLines from '@/app/WeatherLines'

import Link         from 'next/link'
import { Github }   from 'lucide-react'

const Home = () => {
  return (
    <div>
      <main className="flex flex-col">
        {/* INTRODUCTION */}
        <Line number={'1'} status={'none'}>
          <div className="text-[#928374]">
            /* <span className="hover:underline hover:font-bold">joshuatighe.dev</span> */
          </div>
        </Line>
        <Line number={'2'} status={'none'}>
          <div className="text-[#b8bb26]">
            "hello, my name is <span className="font-extrabold">joshua tighe</span>";
          </div>
        </Line>
        <Line number={'3'} status={'none'}>
          <></>
        </Line>
        <Line number={'4'} status={'warning'}>
          <div>and this is my <span className="text-[#fb4934]">portfolio_website</span>() {'{'}</div>
        </Line>

        {/* PROJECTS */}
        <Line number={'5'} status={'none'}>
          <div className="text-[#928374]">
            {'    '}// <span className="bg-[#fbf1c7]">TODO</span>: 
            add projects <Link href="https://github.com/joshuatighe" target='_blank'><Github className="inline" /></Link>
          </div>
        </Line>
        <Line number={'6'} status={'none'}>
          <div>{'}'}</div>
        </Line>

        <Line number={'7'} status={'none'}>
          <></>
        </Line>

        <WeatherLines />

        {Array.from({ length: 30 }).map((_, i) => <BlankLine key={i} />)}
      </main>
      <Footer />
    </div>
  )
}

export default Home