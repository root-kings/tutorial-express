const Product = require('../models/product').model
const ProductCategory = require('../models/productcategory').model

exports.list_product_get = function (req, res) {
  Product.find()
    .populate("category")
    .lean()
    .then(doc => {
      return res.send(doc)
    })
    .catch(err => {
      console.error(err)
      return res.status(500).send(err)
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
      return res.send(doc)
    })
    .catch(err => {
      console.error({ err })
      return res.status(500).send({ err })
    })
}

exports.list_category_get = function (req, res) {
  ProductCategory.find()
    .lean()
    .then(doc => {
      return res.send(doc)
    })
    .catch(err => {
      console.error(err)
      return res.status(500).send(err)
    })
}

exports.create_category_post = (req, res) => {
  const { name } = req.body

  let newProductCategory = new ProductCategory({
    name
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
