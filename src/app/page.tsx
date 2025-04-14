'use client'

import Line from '@/app/ui/Line';
import Footer from '@/app/ui/Footer';
import { useState } from 'react';

const Home = () => {
  const [activeLine, setActiveLine] = useState(0);

  return (
    <div>
      <main className="flex flex-col">
        <div className="flex">
          <div className="w-6 flex-none text-right mr-4 text-[#d79921] bg-[#3c3836]"></div>
          <div className="w-8 flex-none text-right mr-4">1</div>
          <div className="text-[#928374]">/* <span className="hover:underline hover:font-bold">joshuatighe.ie</span> */</div>
        </div>
        <div className="flex">
          <div className="w-6 flex-none text-right mr-4 text-[#d79921] bg-[#3c3836]"></div>
          <div className="w-8 flex-none text-right right mr-4">2</div>
          <div>hello, my name is <span className="font-extrabold">joshua tighe</span></div>
        </div>
        <div className="flex">
          <div className="w-6 flex-none text-right mr-4 text-[#d79921] bg-[#3c3836]">W</div>
          <div className="w-8 flex-none text-right mr-4">3</div>
          <div className="">and this is a <span className="text-[#fb4934]">test</span>()</div>
        </div>
        <div className="flex">
          <div className="w-6 flex-none text-right mr-4 text-[#d79921] bg-[#3c3836]"></div>
          <div className="w-8 flex-none text-right mr-4 text-[#928374]">~</div>
          <div className=""></div>
        </div>
        <div className="flex">
          <div className="w-6 flex-none text-right mr-4 text-[#d79921] bg-[#3c3836]"></div>
          <div className="w-8 flex-none text-right mr-4 text-[#928374]">~</div>
          <div className=""></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;