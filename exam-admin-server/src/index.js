const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');


const app = new Koa();
// ssl 에러 방지 (certificate has expired Error)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.use(bodyParser());
app.use(cors());

app.use(require('./routes').routes());
app.use((ctx) => {
  ctx.body = 'Hello Koa';
});

app.listen(4000, () => {
  console.log('server is listening to port 4000');
});
