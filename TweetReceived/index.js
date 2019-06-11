module.exports = async function (context, tweet) {
    return {
        "target": "newMessage",
        "arguments": [tweet]
    };
};