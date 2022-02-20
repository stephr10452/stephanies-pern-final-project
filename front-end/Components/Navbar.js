import { Link}  from "react-router-dom";

function NavBar() {
    return(
        <div>
            <nav className='navbar'>
            
                    <Link id='candleApp'to="/candles">Click for Candles!</Link>
            
                    <Link id='candleApp' to="/candles/new"><button>Create Your Own Candle!!</button></Link>
            
            </nav>  
        </div>    
    );
}

export default NavBar;
