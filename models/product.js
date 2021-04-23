const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Schema = mongoose.Schema

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number
    },
    image: {
      type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'ProductCategory',
        required: true
      },
  
    
  },
  {
    toJSON: {
      virtuals: true
    },
    toObjects: {
      virtuals: true
    }
  }
)

ProductSchema.plugin(mongoosePaginate)

const ProductModel = mongoose.model('Product', ProductSchema)

module.exports = {
  model: ProductModel,
  schema: ProductSchema
}
