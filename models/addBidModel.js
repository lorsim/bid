import mongoose from 'mongoose'

const addBidSchema = mongoose.Schema({
    
    price: {
        type: Number,
        required: true,
        default: 0,
      }
    
},{
    timestamps: true,
  })

  const addBid = mongoose.model('addBid', addBidSchema)

  export default addBid