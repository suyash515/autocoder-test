module.exports = {
    friendlyName: 'Delete a user',
    description: 'Delete user from database',
    inputs: {
        delete_criteria: {
            type: 'ref',
            required: true
        }
    },

    fn: async function(inputs, exits) {
        await User.destroy(inputs.delete_criteria);

        return exits.success();
    }
};