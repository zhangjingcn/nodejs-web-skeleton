/**
 * Created by shaoyin.zj on 16/12/25.
 */
var template = require('art-template');

function arttemplate(dir){
    return async (ctx, next) => {
        // 给ctx绑定render函数:
        ctx.render = function (view, model) {
            // 把render后的内容赋值给response.body:
            ctx.response.body = template(dir + '/views/' + view, model);
            // 设置Content-Type:
            ctx.response.type = 'text/html';
        };
        // 继续处理请求:
        await next();
    };
}

module.exports = arttemplate;