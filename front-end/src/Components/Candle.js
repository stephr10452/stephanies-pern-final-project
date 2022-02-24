import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from '@material-ui/icons';
import { FavoriteBorderOutlined, SearchOutlined } from '@material-ui/icons';
import { React,useState } from "react";

function Candle({candle}) {

  const [hoverEffect,setHoverEffects] = useState(' opacity-0')
  const handleHoverEnter =()=>{
      setHoverEffects(' oppacity-1 bg-[teal]' )
  } 
  const handleHoverExit =()=>{
      setHoverEffects(' opacity-0')
  }
  const  iconStyle = "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-teal hoover:text-white hover:scale-[1.1] ease in duration-100 cursor-pointer"
 return (
     <div className='flex flex-1 items-center justify-center min-w-[250px] min-h-[350] overflow-hidden rounded-md  shadow-lg m-2 relative' onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverExit}>
         
         <img className="allCandles" src={candle.image} alt='{candle.image}'/>
         
  
  <div className={`flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100 ` + hoverEffect}>
  
  <div className={iconStyle}>
            {/* icos */}
            <ShoppingCartOutlined/>
        </div>
        <div className={iconStyle}>
           
      <Link id='single'to={`/candles/${candle.id}`}><SearchOutlined/></Link>
  
        </div>
        </div>

 </div>
 )
}
export default Candle