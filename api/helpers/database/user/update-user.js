module.exports = {
    friendlyName: "Update User",
    description: "Helper to update user data in database",
    inputs: {
        search_criteria: {
            type: 'json',
            required: true
        },
        update_params: {
            type: 'json',
            required: true
        }
    },

    exits: {
        success: {
            description: 'All done.'
        },
    },

    fn: async function(inputs, exits) {
        await User.update(inputs.search_criteria, inputs.update_params);
        return exits.success();
    }
};