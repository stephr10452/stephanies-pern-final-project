import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";


const API_URL = process.env.REACT_APP_API_URL;

function CandleDetails() {
    const [candle, setCandle] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate();
    
    useEffect(() => {
      axios
        .get(`${API_URL}/candles/${id}`)
        .then((res) => {
          setCandle(res.data);
      }).catch((error) => {
        console.log(error);
        });
    }, [id]);

    function handleDelete() {
     axios 
        .delete(`${API_URL}/candles/${id}`)
        .then((res) => {
            navigate('/candles');
      }).catch((error)=>{
         console.log(error);
     });
    };

  
return (
 <div className="flex justify center">
    <div className='canDetail'>    
        <div>Candle: {candle.name}</div>
        <div>description: {candle.description}</div>
        <div>Price: {candle.price}</div>
        <div>Rating: {candle.rating}</div>
        <div className="flex flex-1"><img className="singleImage" src={ candle.image } /></div>
    </div>
    <div className="btn-group">
        <div>
          {" "}
          <Link to={`/candles`}>
            <button type="button" className="btn btn-outline-primary">Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/candles/${id}/edit`}>
            <button type="button" className="btn btn-outline-success">Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button type="button" className="btn btn-outline-danger"  onClick={handleDelete}>Delete</button>
        </div>
        </div> 
    </div>
);
}

export default CandleDetails;