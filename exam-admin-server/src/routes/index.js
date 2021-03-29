const router = require('koa-router')();
const couponCtrl = require('../controllers/coupon.controller');


router.get('/coupons', couponCtrl.getCoupons);

module.exports = router;