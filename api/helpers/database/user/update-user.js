module.exports = {
    friendlyName: 'Update User Data',
    description: 'Helper to update specific user data',
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