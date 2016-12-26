/**
 * Created by shaoyin.zj on 16/12/24.
 */
var fn_test = async (ctx, next) => {
    var name = ctx.params.name;
    console.log(JSON.stringify(ctx.params));
    ctx.render("test", {name:name, aaa:ctx.params.aaa});
};

module.exports = {
    'GET /test/:name': fn_test
};