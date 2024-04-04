module.exports = {
    friendlyName: "Delete user",
    description: "This controller deletes a user.",
    inputs: {
        data: {
            type: { id: "number" },
            example: {
                id: "12345"
            }
        },
        auth: {
            type: { app_token: "string" },
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
            isEmptyObject = require("is-empty-object");

        try {
            if (inputs && inputs.data && !isEmptyObject(inputs.data)) {
                await sails.helpers.database.user.deleteUser(inputs.data);

                return exits.success({});
            } else {
                error.push(await sails.helpers.utility.error.getAppError("general.invalid_parameters"));

                return exits.jsonError(error);
            }
        } catch (e) {
            sails.log.debug("delete-user.js : e"); //debug
            sails.log.debug(e); //debug
            error.push(await sails.helpers.utility.error.getAppError("general.unknown_error"));

            return exits.jsonError(error);
        }
    }
};