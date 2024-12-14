module.exports = {
    friendlyName: 'Update user data',
    description: 'Helper to update User data.',
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