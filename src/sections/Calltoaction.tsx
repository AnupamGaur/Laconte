import React from 'react'
import Cutcornerbutton from '../components/Cutcornerbutton'
import { section } from 'framer-motion/client'
import Hexagon from '../components/Hexagon'
import Circle from '../components/Circle'

const Calltoaction = () => {
  return (
    <section className='py-96 overflow-hidden'>
    <div className='relative'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <Hexagon reverse/>
      </div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <Hexagon size={1300}/>
      </div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <Circle className='absolute left-0 -top-[460px] size-[220px]' animate={false} >
        <img src="/assets/images/cuboid.png" alt="" className='size-[140px]' />
      </Circle>
      </div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <Circle className='absolute -left-[700px] -top-[70px] size-[220px]' animate={true} >
        <img src="/assets/images/cylinder.png" alt="" className='size-[140px]' />
      </Circle>
      </div>
      <div className='container'>
        <div>
        <h2 className='font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center'>Ready to <span className='block'>get started</span></h2>
        <p className='text-xl text-zinc-400 max-w-sm mx-auto lg:text-2xl text-center mt-8'>Get in touch with us today to learn more about our Innovations</p>
        <div className='flex mt-12 justify-center'>
        <Cutcornerbutton>Get Started</Cutcornerbutton>
        </div>
        </div>
      </div>

    </div>
    </section>
  )
}

export default Calltoaction