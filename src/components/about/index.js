import Image from 'next/image'
import React from 'react'
import profilePic from './profile.jpg'

const About = () => {
  return (
    <section id='about' class="min-h-screen flex flex-col items-start justify-center">
      <h1 className='container text-gray-300 text-3xl font-bold mb-12'><span className='text-green'>01.</span> About Me</h1>
      <div className='container grid w-full grid-cols-2 gap-2'>
        <div className='text-gray-400 text-lg'>
          <p className='mb-3'>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
          <p className='mb-3'>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
          <p className='mb-3'>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
          <p className='mb-3'>Here are a few technologies I’ve been working with recently:</p>
          <div className='flex space-x-6'>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            <ul>
              <li>Node.js</li>
              <li>GraphQL</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
        <div className='flex items-start justify-end'>
          <Image
            src={profilePic}
            width={350}
            objectFit={'cover'}
            alt='Profile Picture'
          />
        </div>
      </div>
    </section>
  )
}

export default About