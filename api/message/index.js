module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    console.log(req);

    const name = (req.query.name || (req.body && req.body.name));
    
    const getAge = function(person) {
        const date = new Date();
        const yearNow = date.getFullYear();
        return yearNow - person.birthYear;
    }

    const reverseGender = function(gender) {
        if(gender == "Female") {
            return "Male";
        } else if(gender == "Male") {
            return "Female";
        }
    }

    const inData = context.bindings.inputDocument;
    console.log(inData);

    let responseMessage = "";
    for (let i = 0; i < inData.length; i++) {
        if(name == inData[i].name) {
            responseMessage = `${inData[i].name} is not a ${reverseGender(inData[i].gender).toLowerCase()}, and she is ${getAge(inData[i])}.`;
        }
    }


    context.res.json({
        text: responseMessage,
        dbData: inData
    });
}

