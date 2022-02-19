const express = require("express");
const candles = express.Router();
const {getAllCandles,getCandle,createCandle,deleteCandle,updateCandle}=require("../queries/candles");


candles.get("/", async (req, res)=>{
    try{
        const allCandles = await getAllCandles();
        if(allCandles[0]){
            res.status(200).json(allCandles);
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
  candles.post("/",   async (req, res)=>{
    const { body } = req;
 try{
        const createdCandle = await createCandle(body);
        if(createdCandle.id){
            res.status(200).json(createdCandle);
        } else {
            res.status(500).json({error: "No Candle can be melted"});
        }
    } catch(err){
        console.log(err);
    }
})
candles.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedCandle = await deleteCandle(id);
    if (deletedCandle.id) {
      res.status(200).json(deletedCandle);
    } else {
      res.status(404).json("Candle is no longer lit");
    }
  });

  candles.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedCandles = await updateCandle(id, req.body);
    res.status(200).json(updatedCandles);
  });



module.exports = candles;