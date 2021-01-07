const express = require('express');
const router = express.Router();
const loveController = require('../Controllers/Love.controller');

router.post('/postLove', loveController.postData);
router.get('/getAllData', loveController.getAllData);
// router.get('/getById', shopController.getById);
// router.patch('/patchById', shopController.patchById);
// router.put('/putById', shopController.putById);
// router.delete('/deleteById', shopController.deleteById);

module.exports = router;