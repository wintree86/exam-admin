

exports.getCoupons = async ctx => {
  try {
    ctx.body = {
      message: 'ok'
    }
  } catch(err) {
    console.error(err);
  }
}