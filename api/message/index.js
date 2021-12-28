module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    console.log(req);

    const melodyData = {name: "Melody", age: 7, gender: "Female"};
    const irisData = {name: "Iris", age: 3, gender: "Female"};

    const name = (req.query.name || (req.body && req.body.name));
    let responseMessage = name
        ? `Hello, ${name}! I'm happy to show you this website.`
        : "Hello, friend. I'm happy to show you this website.";
    console.log(name);
    if(name == melodyData.name) {
        responseMessage = `${melodyData.name} is a ${melodyData.gender.toLowerCase()}, and she is ${melodyData.age}`;
    } else if(name == irisData.name) {
        responseMessage = `${irisData.name} is a ${irisData.gender}, and she is ${irisData.age}`;
    }
    
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