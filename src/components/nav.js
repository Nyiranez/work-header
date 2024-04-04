import React from 'react'

const Nav = () => {
  return (
    <div className='bg-black pt-8 pb-4 space-y-8'>
        <h1 className='text-white'>Country API App</h1>
        <p className='text-white'>This is a simple app that allows you to search for countries and continents using the API.</p>
        <input type="text" placeholder='Search' className='w-64 h-12 pl-4 '></input>
    </div>
  )
}

export default Nav