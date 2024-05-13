module.exports = {
    friendlyName: "Create a new user",
    description: "Controller that handles creating a new user.",
    inputs: {
        data: {
            type: {},
            example: {
                email: "user@example.com",
                name: "John Doe",
                password: "aVerySecurePassword"
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
            addedResponse = "";

        try {
            if (inputs.data) {
                validationElements = [{
                    type: simpleValidator.constants.type.email,
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
                },{
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
                        email: inputs.data.email,
                        name: inputs.data.name,
                        password: await sails.helpers.security.hashPassword(inputs.data.password)
                    };

                    addedResponse = await sails.helpers.database.user.createUser(insertParams);

                    return exits.success({
                        data: addedResponse
                    });
                }
            }
        } catch (e) {
            sails.log.debug("create-user.js : e"); //debug
            sails.log.debug(e); //debug
            error.push(await sails.helpers.utility.error.getAppError("general.invalid_parameters"));

            return exits.jsonError(error);
        }
    }
};