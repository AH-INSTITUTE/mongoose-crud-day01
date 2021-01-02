const express = require('express');
const router = express.Router();
const shopController = require('../Controllers/Shop.controller');

router.post('/postShop', shopController.postData);
router.get('/getAllData', shopController.getAllData);
router.get('/getById', shopController.getById);
router.patch('/patchById', shopController.patchById);
router.put('/putById', shopController.putById);
router.delete('/deleteById', shopController.deleteById);

module.exports = router;