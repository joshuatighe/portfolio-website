'use client'

import Line      from '@/app/ui/Line'
import BlankLine from '@/app/ui/BlankLine'
import Footer    from '@/app/ui/Footer'

import Link from 'next/link'
import { Github } from 'lucide-react'

const Home = () => {
  return (
    <div>
      <main className="flex flex-col">
        <Line number={'1'} status={'none'}>
          <div className="text-[#928374]">/* <span className="hover:underline hover:font-bold">joshuatighe.ie</span> */</div>
        </Line>

        <Line number={'2'} status={'none'}>
          <div>hello, my name is <span className="font-extrabold">joshua tighe</span></div>
        </Line>

        <Line number={'3'} status={'none'}>
          <div></div>
        </Line>

        <Line number={'4'} status={'warning'}>
          <div>and this is my <span className="text-[#fb4934]">portfolio_website</span>() {'{'}</div>
        </Line>

        <Line number={'5'} status={'none'}>
          <div className="pl-10.5 text-[#928374]">
            // <span className="bg-[#fbf1c7]">TODO</span>: add projects <Link href="https://github.com/joshuatighe" target='_blank'><Github className="inline"/></Link>
          </div>
        </Line>

        <Line number={'6'} status={'none'}>
          <div>{'}'}</div>
        </Line>

        {Array.from({ length: 30 }).map((_, i) => <BlankLine key={i} />)}
      </main>
      <Footer />
    </div>
  )
}

export default Home