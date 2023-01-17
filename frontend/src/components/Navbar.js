import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div className='border bg-slate-300 p-4 text-3xl mx-8 rounded-md'>
            <Link to="/">
                <h1>Workout Buddy</h1>
            </Link>
        </div>
    </header>
  )
}

export default Navbar