module.exports = {
    friendlyName: "update user helper",
    description: "Helper to update user details in the database",
    inputs: {
        search_criteria: {
            type: "json",
            required: true
        },
        update_params: {
            type: "json",
            required: true
        }
    },

    fn: async function(inputs, exits) {
        await User.update(inputs.search_criteria, inputs.update_params);

        return exits.success();
    }
};