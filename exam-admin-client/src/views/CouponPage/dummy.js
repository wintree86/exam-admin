import { COUPON, COUPON_STATE } from '../../constants/const';

/**
 * type: 쿠폰 카테고리
 * value: 할인인 경우 할인금액, 할인율
 * startDate: 이벤트 쿠폰 유효시작기한
 * endDate: 이벤트 쿠폰 사용만료기한
 * amount: 발급된 쿠폰의 수
 * expiredPeriod: 쿠폰이 발급된 후 만료 기한(D)
 * minPurchase: 쿠폰이 적용가능한 최소 구매 금액
 * maxDiscountCost: 할인율이 적용되는 쿠폰인 경우 최대 할인 금액
 * createdDate: 쿠폰 생성일
 * updatedDate: 쿠폰 정보 수정일
 * status: 쿠폰 상태값
 */
const dummyCoupon = [
  {
    couponId: 1, 
    type: COUPON.DISCOUNT_AMOUNT,
    value: 2000,
    startDate: null,
    endDate: null,
    amount: 10000,
    expiredPeriod: 30,
    minPurchase: 20000,
    maxDiscountCost: 0,
    status: COUPON_STATE.READY,
    createdDate: "2021-03-25 10:33:22",
    updatedDate: null,
  },
  {
    couponId: 2, 
    type: COUPON.DISCOUNT_RATE,
    value: 15,
    startDate: '2021-03-01',
    endDate: '2021-04-30',
    amount: 100000,
    expiredPeriod: 2,
    minPurchase: 50000,
    maxDiscountCost: 15000,
    status: COUPON_STATE.ACTIVE,
    createdDate: "2021-03-25 11:33:22",
    updatedDate: null,
  },
  {
    couponId: 3, 
    type: COUPON.FREE_SHIIPING,
    value: 0,
    startDate: null,
    endDate: null,
    amount: 10000,
    expiredPeriod: 7,
    minPurchase: 0,
    maxDiscountCost: 0,
    status: COUPON_STATE.SOLDOUT,
    createdDate: "2021-03-26 12:33:22",
    updatedDate: null,
  },
  {
    couponId: 4, 
    type: COUPON.TRIAL_MONTH,
    value: 0,
    startDate: '2021-01-01',
    endDate: '2021-06-30',
    amount: 0,
    expiredPeriod: 30,
    minPurchase: 0,
    maxDiscountCost: 0,
    status: COUPON_STATE.CANCEL,
    createdDate: "2021-03-27 08:33:22",
    updatedDate: null,
  }
];

export default dummyCoupon;