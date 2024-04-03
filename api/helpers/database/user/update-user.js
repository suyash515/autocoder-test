module.exports = {
    friendlyName: 'Update user details',
    description: 'A helper to update user details',
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

    fn: async function(inputs, exits) {
        await User.update(inputs.search_criteria, inputs.update_params);

        return exits.success();
    }
};