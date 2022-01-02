module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    console.log(req);

    // const name = (req.query.name || (req.body && req.body.name));

    const inData = context.bindings.inputDocument;
    console.log(inData);

    let responseMessage = "";
    for (let i = 0; i < inData.length; i++) {
        if(i == inData.length - 1) {
            responseMessage += "and " + inData[i].name + ".";
        } else {
            responseMessage += inData[i].name + ", ";
        }
    }

    context.res.json({
        text: responseMessage,
        dbData: inData
    });
}