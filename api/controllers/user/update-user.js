module.exports = {
    friendlyName: "Update user",
    description: "Controller to update user.",
    inputs: {
        data: {
            type: {},
            example: {
                search_criteria: {
                    id: "123456789"
                },
                update_params: {
                    name: "John",
                    password: "password_new"
                }
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
            updateResponse = null;

        try {
            if (inputs.data && inputs.data.search_criteria && inputs.data.update_params) {
                updateResponse = await sails.helpers.database.user.updateUser(inputs.data.search_criteria, inputs.data.update_params);

                return exits.success({
                    data: updateResponse
                });
            } else {
                error.push(await sails.helpers.utility.error.getAppError("general.invalid_parameters"));

                return exits.jsonError(error);
            }
        } catch (e) {
            sails.log.debug("update-user.js : e"); //debug
            sails.log.debug(e); //debug
            error.push(await sails.helpers.utility.error.getAppError("general.unknown_error"));

            return exits.jsonError(error);
        }
    }
};