module.exports = async function (context, req) {
    context.log(context.bindings)
    context.res.body = context.bindings.connectionInfo
};