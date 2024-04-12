module.exports = {
    friendlyName: "Update a user in the database",
    description: "Receives data and updates a user in the database based on their unique identifier.",
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