const router = require('express').Router()

const validateToken = require('../middlewares/validateToken')

const productcontroller = require('../controllers/product')

// Controllers -----

// router.get('/:userid', validateToken, productcontroller.details_get)

router.get('/', productcontroller.list_product_get)

router.post('/', productcontroller.create_product_post)

router.get('/categories', productcontroller.list_category_get)

router.post('/categories', productcontroller.create_category_post)

// router.delete('/:userid', validateToken, productcontroller.delete_delete)

router.get('/', (req, res) => {
  res.send('Please read documentation for the API. (user)')
})

// Export -----
module.exports = router
