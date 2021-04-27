const Product = require('../models/Product').model
const ProductCategory = require('../models/ProductCategory').model

exports.list_product_get = (req, res) => {
  Product.find()
    .populate('category')
    .lean()
    .then(doc => {
      return res.send(doc)
    })
    .catch(err => {
      console.error({ err })
      return res.status(500).send({ err })
    })
}

exports.create_product_post = (req, res) => {
  const { name, price, image, category } = req.body

  let newProduct = new Product({
    name,
    price,
    image,
    category
  })

  newProduct
    .save()
    .then(doc => {
      global.mqtt.publish('sharvari', 'Added new Product: ' + doc._id)
      return res.send(doc)
    })
    .catch(err => {
      console.error({ err })
      return res.status(500).send({ err })
    })
}

exports.list_category_get = (req, res) => {
  ProductCategory.find()
    .lean()
    .then(doc => {
      return res.send(doc)
    })
    .catch(err => {
      console.error({ err })
      return res.status(500).send({ err })
    })
}

exports.create_category_post = (req, res) => {
  const { name, price, image, category } = req.body

  let newProductCategory = new ProductCategory({
    name,
    price,
    image,
    category
  })

  newProductCategory
    .save()
    .then(doc => {
      return res.send(doc)
    })
    .catch(err => {
      console.error({ err })
      return res.status(500).send({ err })
    })
}

// exports.delete_delete = async (req, res) => {
//   const { userid } = req.params

//   let query = {
//     _id: userid
//   }

//   User.deleteOne(query)
//     .then(doc => {
//       return res.send(doc)
//     })
//     .catch(err => {
//       console.error({ err })
//       return res.status(500).send({ err })
//     })
// }
