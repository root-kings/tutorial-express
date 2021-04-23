const router = require('express').Router()

const validateToken = require('../middlewares/validateToken')

const productController = require('../controllers/product')

// Controllers -----

//router.get('/:userid',  productController.details_get)

router.get('/',  productController.list_product_get)

router.post('/',  productController.create_product_post)

router.get('/categories', productController.list_category_get)

router.post('/categories',  productController.create_category_post)

//router.delete('/:userid',  productController.delete_delete)

router.get('/', (req, res) => {
  res.send('Please read documentation for the API. (user)')
})

// Export -----
module.exports = router