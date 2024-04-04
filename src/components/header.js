import Nav from './nav';

import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='bg-black flex flex-row justify-around items-center h-24'>
            <h1 className='text-blue-400 text-2xl'>Logoipsum</h1>
            <h1 className='text-white'>Countries</h1>
        </div>
        <Nav/>
    </div>
  )
}

export default Header;
