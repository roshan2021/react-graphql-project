const Query = {
   async items(parent, args, ctx, info) {
       return ctx.db.query.items();
       return items;
   }
};

module.exports = Query;