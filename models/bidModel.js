import mongoose from 'mongoose'

const bidSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    date: {
        type: Date,
        required: true,
      },
    price: {
        type: Number,
        required: true,
        default: 0,
      },
    
},{
    timestamps: true,
  })

  const Bid = mongoose.model('Bid', bidSchema)

  export default Bid