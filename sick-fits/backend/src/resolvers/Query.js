const {  forwardTo } = require('prisma-binding');

const Query = {
    items: forwardTo('db')
//    async items(parent, args, ctx, info) {
//        return ctx.db.query.items();
//        return items;
//    }
};

module.exports = Query;