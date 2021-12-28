module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    console.log(req);

    const melodyData = {name: "Melody", birthYear: 2014, gender: "Female"};
    const irisData = {name: "Iris", birthYear: 2018, gender: "Female"};

    const name = (req.query.name || (req.body && req.body.name));
    let responseMessage = name
        ? `Hello, ${name}! I'm happy to show you this website.`
        : "Hello, friend. I'm happy to show you this website.";
    let getAge = function(person) {
        const date = new Date();
        const yearNow = date.getFullYear();
        return yearNow - person.birthYear;
    }
    if(name == melodyData.name) {
        responseMessage = `${melodyData.name} is a ${melodyData.gender.toLowerCase()}, and she is ${getAge(melodyData)}`;
    } else if(name == irisData.name) {
        responseMessage = `${irisData.name} is a ${irisData.gender}, and she is ${getAge(irisData)}`;
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