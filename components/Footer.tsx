"use client"

import { BriefcaseBusiness, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='flex item-center gap-10 py-16 justify-center'>
      <Link className='text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-300 flex items-center justify-center gap-2' href="https://arnab-majumder-portfolio.netlify.app/" target='blank' >
        <BriefcaseBusiness />
        My Portfolio &nbsp; &#129109;
      </Link>

      <Link className='text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-300 flex items-center justify-center gap-2' href="https://arnab-majumder-portfolio.netlify.app/" target='blank' >
        <Linkedin />
        <span>Linkedin Account &nbsp; &#129109;</span>
      </Link>

      <Link className='text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-300 flex items-center justify-center gap-2' href="https://github.com/Arnab514/code-to-img" target='blank' >
        <Github />
        <span>Source Code here &nbsp; &#129109;</span>
      </Link>
    </div>
  )
}

export default Footer
