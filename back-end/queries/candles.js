const db = require("../db/dbConfig.js");

const getAllCandles = async() => {
    try{  
        console.log("hello")
        const allCandles = await db.any('SELECT * FROM candles;');
        console.log(allCandles)
        return allCandles;
      }  catch(error) {
            return error;
        }
    }
    const getCandle = async(id)=>{
        try{
            const oneCandle = await db.one(
                "SELECT * FROM candles WHERE id=$1;",
                id
            );
            return oneCandle;
        } catch(error){
            return error;
        }
    }
    const createCandle = async (candle) => {
        try{
            const newCandle = await db.one(
                "INSERT INTO candles (name, description, price, rating, featured, image) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;",
                [candle.name, candle.description, candle.price, candle.rating, candle.featured, candle.image]
            )
            return newCandle;
        } catch(error) {
            return error;
        }
        }

        const deleteCandle = async (id) => {
            try {
                const deletedCandle = await db.one(
                    "DELETE FROM candles WHERE id = $1 RETURNING *;",
                    id
                );
                return deletedCandle;
            } catch (error) {
                return error;
            }
        }

        const updateCandle = async (id, candle) => {
            try {
                const updatedCandle = await db.one(
                    "UPDATE candles SET name=$1, description=$2, price=$3, rating=$4, featured=$5, image=$6 WHERE id=$7 RETURNING *;",
                  
                    [candle.name, candle.description, candle.price, candle.rating, candle.featured, candle.image, id]
               
                    );
                    console.log(updatedCandle);
                return updatedCandle;
            } catch (error) {
                return error;
            }
        }


    module.exports = {
        getAllCandles,
        getCandle,
        createCandle,
        deleteCandle,
        updateCandle
    };