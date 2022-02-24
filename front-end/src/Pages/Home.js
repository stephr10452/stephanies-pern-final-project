import {React,Link} from "react-router-dom";
import Announce from "../Components/Announce";
import Footer from "../Components/footer";
function Home() {
    return (
      <div className='Home'>
        <Announce />
        <div className="wrapper flex w-[100%] ">
        <div className='slide flex items-center justify-center h-[100]'>
        <div className="forImage">
         <img className="h-[100%] object-cover"
         src="https://images.unsplash.com/photo-1593542468714-ac3ba4b38d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
         alt="image"
         />
         <Link to = {`/candles`}>
         <button className="btn">Buy Now</button>
         </Link>
         </div>
        </div>
        </div>
        <Footer />
        </div>
       
        
  )
    }
  export default Home;

  // <img className="h-[100%] object-cover"
  // src="https://images.unsplash.com/photo-1593542468714-ac3ba4b38d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
  // alt="image"
  // />