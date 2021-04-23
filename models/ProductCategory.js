const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Schema = mongoose.Schema

const ProductCategorySchema = new Schema(
  {
    name: {
      type: String,
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

ProductCategorySchema.plugin(mongoosePaginate)

const ProductCategoryModel = mongoose.model('ProductCategory', ProductCategorySchema)

module.exports = {
  model: ProductCategoryModel,
  schema: ProductCategorySchema
}
