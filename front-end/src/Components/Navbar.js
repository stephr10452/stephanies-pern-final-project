import React from 'react';
import {Search,Badge, ShoppingCartCheckout} from  '@material-ui/icons'
import {Link} from 'react-router-dom'

function Navbar(){
  return <div className='navbar h-[60px] shadow-md relative z-10'>
    <div className='wrapper p1-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center'>
      {/* left div */}
      <div className='left flex flex-1 items-center'>
        <div className="language cursor-pointer text-[16px]">  </div>
       <div className='searchInput flex border-[2px] border-solid border-lighgrey rounded-md items-center m1-[10px] p-[5px] focus-within:border-teal-300 transition-all'>
         <input className="input outline-none"
         type="text"/>
         <Search style={{fontSize: '16px'}} />
       </div>
      </div>
      {/* logo */}
      <div className='"center flex-1 text-center'>
        <div className="logo font-bold text-lg">
          Vibing with a Candle
        </div>
      </div>
      {/* right  */}
      <div className="right flex flex-1 items-center justify-end">
        <button>
              <Link to="/candles/new">Make Your own Candle</Link>
          </button>

      </div>
    </div>

  </div>
}

export default Navbar;