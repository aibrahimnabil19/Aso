import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="bg-slate-700 py-4">
        <div className="flex justify-between items-center mx-auto max-w-5xl">
            <Link href={"/"} className="text-3xl font-bold">Aso</Link>

            <div className='flex justify-between items-center gap-16'>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/portfolio"}>Portfolio</Link>
                <Link href={"/contact"}>Contact Us</Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar

