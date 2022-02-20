import axios from 'axios';
import { useState, useEffect } from 'react';


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

    return 
}