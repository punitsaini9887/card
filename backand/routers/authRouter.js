const { Router } = require('express');
const authControaller = require('../controllers/authControaller')
const prodectControaller = require('../controllers/prodectControaller')



const router = Router();

router.post('/singuser', authControaller.user_post);










router.post('/singin',authControaller.user_post)

router.post('/add',prodectControaller.addprodect_post)
router.get('/getprodect',prodectControaller.prodect_finde)
router.put('/proudectupdate/:_id',prodectControaller.productupdate_put)
router.delete('oneprodectdelete/:_id',prodectControaller.prodectdelete_delete)
router.delete('allprodectdelete',prodectControaller.allprodectdelete_delete)
router.put('oneupdateprodect/:_id',prodectControaller.productupdate_put)
router.get('/search/:key',prodectControaller.prodectseacher)




module.exports = router;
