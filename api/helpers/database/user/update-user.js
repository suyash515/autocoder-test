module.exports = {
    friendlyName: "Update user data",
    description: "Updates user data in the database using provided search criteria and update parameters.",
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