import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

function CandleNew() {
    const { id } = useParams();

    const [candle, setCandle] = useState({
        name: '',
        description: '',
        price: 0,
        rating: 0,
        featured: false,
        image: ''
});

const navigate = useNavigate();

const handleTextChange = (event) => {
    setCandle({...candle,[event.target.id]: event.target.value });
};

const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post(`${API_URL}/candles`, candle)
      .then((res) => {
          navigate(`/candles`)
    }).catch((error) => {
        console.log(error);
    })
};


return (
<div className='candleNew'>
   <div>
     <form onSubmit={handleSubmit}>
     <br/>
           <label htmlFor="name">Name</label>
           <input 
               id = "name"
               value = {candle.name}
               type = "text"
               onChange = {handleTextChange}
               placeholder = "name"
               required
               />
       <br/>
        <div>
             <label htmlFor='description'>description</label><br/>
             <input
               id = 'description'
               value = {candle.description}
               type = 'number'
               onChange = {handleTextChange}
               placeholder = 'description'
               required
             />  
        </div>  
        <br/>
        <div>
             <label htmlFor='price'>price</label><br/>
             <input
               id = 'price'
               value = {candle.price}
               type = 'number'
               onChange = {handleTextChange}
               placeholder = 'price'
               required
             />  
        </div> 
        <br/> 
        <div>
             <label htmlFor='rating'>Ratings </label><br/>
             <input
               id = 'rating'
               value = {candle.rating}
               type = 'number'
               onChange = {handleTextChange}
               placeholder = 'rating'
               required
             />  
        </div> 
        <br/>
        <div>
           <label htmlFor='image'>Image</label><br/>
           <input
              id = 'image'
              type = 'text'
              pattern = 'http[s]*://.+'
              required
              value = {candle.image}
              placeholder = 'http://'
              onChange = {handleTextChange}
            />
        </div>
        <br/>
        <div className='candleNB'>
        <button onClick={handleSubmit}>Create New Candle</button>
                    
                    <br/>
                    <Link to = {`/candles/${id}`}>
                        <button type = 'submit'>Back</button>
                    </Link>
        </div>
     </form>
   </div>  
 </div>
 );


}
export default CandleNew 