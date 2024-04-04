import React from 'react'

export const Footer = () => {
  return (
    <div>
        <div className='bg-slate-200 flex justify-around items-center h-24'>
            <h1>Logoipsum</h1>
            <p1>copyright &copy; {new Date().getFullYear()} All rights reserved</p1>
        </div>
    </div>
  )
}
