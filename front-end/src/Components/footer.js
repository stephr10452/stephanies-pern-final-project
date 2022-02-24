import { Facebook, Instagram } from '@material-ui/icons';
import React from 'react';


function Footer () {
    return (
        <div className='flex  items-center justify-around p-2'>
          <div className="flex-1 flex flex-col flex-wrap p-2">
          <h1 className='text-[25px]'>
          Vibe with us , for our latest candles
         </h1>  
        <div className='flex-item-center justify-center mt-3 self-start'>
         <div className='m-3 rounded-full cursor-pointer p-2 text-white bg-blue-700'> 
           <Facebook/> 
         </div>
         <div className='m-3 rounded-full cursor-pointer p-2 text-white bg-orange-500'>
           <Instagram/>
         </div>
         </div>
         </div>
        </div>
    )
}

export default Footer;