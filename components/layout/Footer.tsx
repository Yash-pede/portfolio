import { SiteConfig } from '@/lib/config'
import { GithubIcon, LinkedinIcon, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-96 pt-28 pb-14 gap-3'>
    <div>
      <div className='flex gap-x-14 justify-center pt-5'>
        <div className='space-y-5 max-w-80 '><a href="/" className='font-semibold'>Click</a>
          <br />
          <div>I'm {SiteConfig.user.firstName} - a senior front-end developer, thanks for checking out my site!</div>

          <div className='flex flex-row space-x-3'>
            <GithubIcon/>
            <LinkedinIcon/>
            <Twitter/>
          </div>

          <div>© 2024 {SiteConfig.site.name}</div>
        </div>


        <div className='flex flex-row space-x-24 font-semibold'>
          <div className='flex flex-col gap-4'>GENERAL
            <div className='flex flex-col font-medium gap-2'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            </div>
          </div>
          <div className='flex flex-col gap-4'>SPECIFICS
          <div className='flex flex-col font-medium gap-2'>
            <a href="#">Toolbox</a>
            <a href="#">Products</a>
            </div>
          </div>
          <div className='flex flex-col gap-4'>EXTRA
          <div className='flex flex-col font-medium gap-2'>
            <a href="#">Chanelog</a>
            <a href="#">Connections</a>
            <a href="#">Résumé</a>
            <a href="#">Snippets</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer