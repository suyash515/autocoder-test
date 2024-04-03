module.exports = {
    friendlyName: "Create User",
    description: "Creates a new user",
    inputs: {
        data: {
            type: {},
            example: {
                email: 'user@mail.com',
                name: 'John Doe',
                password: 'password_hash'
            }
        },
        auth: {
            type: {},
            example: {
                app_token: ''
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
                }];

                error = simpleValidator.validate(validationElements);

                if (error.length > 0) {
                    return exits.jsonError(error);
                } else {
                    insertParams = {
                        email: inputs.data.email,
                        name: inputs.data.name,
                        password: inputs.data.password
                    };

                    addedResponse = await sails.helpers.database.user.createUser(insertParams);

                    return exits.success({
                        data: addedResponse
                    });
                }
            }
        } catch (e) {
            sails.log.debug("create-user.js : e");
            sails.log.debug(e);
            error.push(await sails.helpers.utility.error.getAppError("general.invalid_parameters"));

            return exits.jsonError(error);
        }
    }
}