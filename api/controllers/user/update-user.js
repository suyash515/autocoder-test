module.exports = {
    friendlyName: "update user",
    description: "Controller to update user details",
    inputs: {
        data: {
            type: {},
            example: {
                search_criteria: {
                    id: "123456789"
                },
                update_params: {
                    email: "example@example.com",
                    name: "user1",
                    password: "password"
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
            sails.log.debug("update-user.js : e");
            sails.log.debug(e);
            error.push(await sails.helpers.utility.error.getAppError("general.unknown_error"));

            return exits.jsonError(error);
        }
    }
};