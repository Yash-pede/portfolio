import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { GridItems } from '@/lib/config'

const AboutGrid = () => {
  return (
    <section id="about">
    <div className='flex items-center justify-center uppercase py-10 font-bold'> About</div>
    <h2 className='text-base sm:text-2xl md:text-3xl md:text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-10 lg:max-w-4xl"'>Here’s what sets me apart and makes me unique</h2>

      <BentoGrid>
        {GridItems.map((item)=>(
          <BentoGridItem
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          className={item.cname}  
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default AboutGrid