module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". I'm happy to show you this website."
        : "Hello, friend. I'm happy to show you this website.";

    // context.res = {
    //     // status: 200, /* Defaults to 200 */
    //     body: responseMessage
    // };

    context.res.json({
        text: responseMessage
    });
}

// module.exports = async function (context, req) {

//     // const inData = context.bindings.inputDocument;
//     // console.log("inData" , inData);

//     context.res.json({
//         text: "Hello from the API"
//     });
// };