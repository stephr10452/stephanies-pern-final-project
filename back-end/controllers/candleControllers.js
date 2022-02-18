const express = require("express");
const candles = express.Router();
const {getAllCandles,getCandle,createCandle,deleteCandle,updateCandle}=require("../queries/candles");


candles.get("/", async (req, res)=>{
    try{
        const allSnacks = await getAllCandles();
        if(allSnacks[0]){
            res.status(200).json(getAllCandles);
        } else {
            res.status(404).json(
                { error: "server error" }
              );
        }    
      } catch(err){
        console.log(err);
    }
});
candles.get("/:id", async (req, res) => {
    const { id } = req.params;
    const candle = await getCandle(id);
    if (candle) {
      res.json(candle);
    } else {
      res.status(404).json({ error: "not found" });
    }
  })



module.exports = candles;