/**
 * Created by shaoyin.zj on 16/12/24.
 */
const Koa = require('koa');
const router = require('koa-router')();

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 导入static middleware:
const staticFile = require('./middleware/static');

// 导入处理post请求的 middleware:
const bodyParser = require('koa-bodyparser');

// 导入处理querystring的 middleware:
const parameter = require('./middleware/parameter');

const template = require('./middleware/template');

// 导入controller middleware:
const controller = require('./middleware/controller');

// 使用middleware:
app.use(staticFile('/static/', __dirname + '/static'));
app.use(bodyParser());
app.use(parameter());
app.use(template(__dirname));
app.use(controller(__dirname + "/controllers/"));

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');