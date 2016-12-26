/**
 * Created by shaoyin.zj on 16/12/26.
 */
const parseurl = require('parseurl');
const querystring = require('querystring');
const _ = require('lodash');

//处理get请求通过querystring传来的参数，放到ctx.params中。
//需要注意的是koa-route处理路由中的参数会覆盖这里写入的值
function parameter(url){
    return async (ctx, next) => {
        parseurl(ctx.request);
        let params = querystring.parse(ctx.request._parsedUrl.query);
        ctx.params = ctx.params || {}
        _.assign(ctx.params, ctx.params, params);
        await next();
    }
}
module.exports = parameter;

