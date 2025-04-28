import Link from "next/link"

import { Linkedin, Github } from "lucide-react"

const Footer = () => {
  return (
    <div className="flex fixed left-0 bottom-0 w-full">
      <div className="bg-[#fbf1c7] text-[#282828] pl-5 pr-5 text-center">normal</div>
      <div className="bg-[#504945] flex-12 text-left pl-5">joshuatighe.dev</div>
      <div className="bg-[#fbf1c7] text-[#282828] pl-5 pr-5 text-center">
        <Link href="https://www.linkedin.com/in/joshuatighe/" target="_blank">
          <Linkedin className="inline" />
        </Link> <Link href="https://github.com/joshuatighe" target="_blank">
          <Github className="inline" />
        </Link>
      </div>
    </div>
  )
};

export default Footer;