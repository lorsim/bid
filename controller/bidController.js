import  asyncHandler from 'express-async-handler'
import Bid from '../models/bidModel.js'
import addBid from '../models/addBidModel.js'

const createBid = asyncHandler(async (req, res) => {
  
  const data = new Bid({
    name: req.body.bid_name,
    date: req.body.date,
    price:req.body.price
 })
 const createdData = await data.save()
  res.status(201).json(createdData)
})

const postBid = asyncHandler(async (req, res) => {
  const bid_id = await Bid.findById(req.params.id)
  if(bid_id){
    const data = new addBid({
      price:req.body.price,
      bid_id: req.params.id
   })
   const createdData = await data.save()
   const maxBid = await addBid.find({}).sort({ price: -1 }).limit(1)
  
   if(createdData.price > maxBid[0].price || createdData.price < maxBid[0].price){
    res.status(201).json(createdData)
   }
   
  }
  
})


export {
    createBid,
    postBid
}