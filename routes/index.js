const express = require('express');
const public = require('../server/controller/public')
const router = express.Router();

router.get('/', public.index);

router.get('/generateCategory/', public.insertCategory);

router.get('/generateProduct/', public.insertProduct);

router.get('/productSingle/:id', public.productSingle);

router.post('/addToCart', public.addToCart);


module.exports = router;
