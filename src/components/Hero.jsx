import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className="bg-background py-4">
        <div className="flex justify-between items-center max-w-5xl mx-auto">

            <div>
                <h1 className="justify-start text-zinc-900 text-7xl font-extrabold leading-20 ">Welcome to Aso</h1>
                <p className="text-lg text-gray-600">Your one-stop solution for all your needs.</p>
                <Button>Explore Now</Button>
            </div>

            <div>
                <Image
                    src="https://ibiene.com/wp-content/uploads/2019/07/aso-oke-full.jpg"
                    alt="Hero Image"
                    width={585}
                    height={400}
                    className="mt-10 rounded-lg shadow-lg"
                />
            </div>

        </div>
    </section>
  )
}

export default Hero