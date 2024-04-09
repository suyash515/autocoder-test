module.exports = {
friendlyName: "Create user",
description: "Controller to create a new user",
inputs: {
data: {
type: {},
example: {
email: "test@test.com",
name: "John Doe",
password: "password"
}
},
auth: {
type: {},
example: {
app_token: ""
}
}
},
exits: {
jsonError: {
responseType: "jsonError"
},
success: {
responseType: "jsonOk"
}
},
fn: async function(inputs, exits) {
let error = [],
insertParams = {},
simpleValidator = require("@suyashsumaroo/simple-validator"),
validationElements = [],
addedUser = "";

try {
if (inputs.data) {
validationElements = [{
type: simpleValidator.constants.type.string,
value: inputs.data.email,
name: "Email",
maxLength: 200,
required: true
}, {
type: simpleValidator.constants.type.string,
value: inputs.data.name,
name: "Name",
maxLength: 200,
required: true
}, {
type: simpleValidator.constants.type.string,
value: inputs.data.password,
name: "Password",
maxLength: 200,
required: true
}];

error = simpleValidator.validate(validationElements);

if (error.length > 0) {
return exits.jsonError(error);
} else {
insertParams = {
email: inputs.email,
name: inputs.name,
password: inputs.password
};

addedUser = await sails.helpers.database.user.createUser(insertParams);

return exits.success({
data: addedUser
});
}
}
} catch (e) {
sails.log.debug("create-user : e");
sails.log.debug(e);
error.push(await sails.helpers.utility.error.getAppError("general.invalid_parameters"));

return exits.jsonError(error);
}
}
};