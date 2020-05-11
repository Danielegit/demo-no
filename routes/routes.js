//routes
const express = require('express');
const router = express.Router();



const homeController = require('../controllers/homeController')
const postController = require('../controllers/postController')
const goodsController = require('../controllers/goodsController')


router.get('/', homeController.home)
router.get('/post', postController.post)

router.get('/goods', goodsController.read)
router.post('/goods', goodsController.create)
// router.get('/goods/:goodId', goodsController.readOne)
router.get('/good/:goodId', goodsController.readOne)

router.get('/about', (req,res)=>{
	res.render('about', {title: 'About tilte from route'})
})


module.exports = router
	
//mongo : daniele  / soscOGx2SBZOAytU