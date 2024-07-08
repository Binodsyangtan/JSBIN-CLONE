import React from 'react'
import { useState } from 'react';

export default function UpperToggle() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
      }
   

  return (
    <>
    {/* <div className='w-full h-[100px] bg-blue-200 border border-red-500  absolute z-2'>
        <div>
            <h2>hello world</h2>
            
        </div>



    </div> */}

    </>
  )
}
