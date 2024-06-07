import React from 'react'
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-start">
      <div class="container mx-auto">
        <p className='text-green mb-4'>Hi, my name is</p>
        <h1 className='text-gray-300 font-extrabold text-4xl lg:text-6xl md:text-5xl sm:text-4xl mb-2'>Mohit Patel.</h1>
        <h1 className='text-gray-400 font-extrabold text-4xl lg:text-6xl md:text-5xl sm:text-4xl mb-2'>I build things for the web.</h1>
        <p className='text-gray-400 mb-6 text-xl'>
          I’m a software engineer specializing in building exceptional digital experiences. <br />
          Currently, I’m working with @Ksolves.
        </p>
        <Button>Resume</Button>
      </div>
    </section>
  )
}

export default Hero