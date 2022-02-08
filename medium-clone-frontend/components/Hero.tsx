import React from 'react'
import logo from '../assets/medium.png'

const Hero = () => {
  return (
    <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 px-5 lg:py-0 lg:px-10">
      <div className="space-y-5 ">
        <h1 className="max-w-xl font-serif text-6xl">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{' '}
          is a place to write, read and connect
        </h1>
        <h2>
          It's easy and free to post your thinking on any topic and connect with
          millions of readers
        </h2>
      </div>
      <div>
        <img
          className="hidden h-32 md:inline-flex lg:h-72"
          src="https://iconape.com/wp-content/png_logo_vector/medium-m.png"
          alt="m logo"
        />
      </div>
    </div>
  )
}

export default Hero
