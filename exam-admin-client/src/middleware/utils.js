import { COUPON, COUPON_STATE } from '../constants/const';
import dayjs from 'dayjs';

export const getCouponTypeName = (couponType) => {
  switch (couponType) {
    case COUPON.DISCOUNT_AMOUNT:
      return '할인(금액)';
    case COUPON.DISCOUNT_RATE:
      return '할인(%)';
    case COUPON.FREE_SHIIPING:
      return '무료 배송';
    case COUPON.TRIAL_MONTH:
      return '무료 구독';
    default:
      return;
  }
};

export const getCouponState = (couponState) => {
  switch (couponState) {
    case COUPON_STATE.READY:
      return '대기중';
    case COUPON_STATE.ACTIVE:
      return '활성';
    case COUPON_STATE.CANCEL:
      return '중지';
    case COUPON_STATE.SOLDOUT:
      return '모두소진';
    default:
      return;
  }
};

export const generateCoupon = () => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const currentTime = dayjs(new Date()).valueOf();
  let timeStr = currentTime.toString();

  for (let i = 0; i < timeStr.length; i++) {
    text += possible[timeStr[i]];
  }

  return text;
};
