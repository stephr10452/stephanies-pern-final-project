import axios from 'axios';
import { useState, useEffect } from 'react';
import Candle from './Candle';


const API_URL = process.env.REACT_APP_API_URL;

function Candles() {
    const [candles, setCandles] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}/candles`)
        .then((res)=>{
            setCandles(res.data);
        }).catch((err)=>{
            throw err;
        })
    }, [API_URL]);

    return (
        <div className="flex flex-wrap p-5 items-center justify-center bg-teal-300" >
            {candles.map((candle, id) => {
                                 return ( <Candle key={id} candle={candle} id={id}/> );
                             })}
       
        </div>
    )
}
export default Candles