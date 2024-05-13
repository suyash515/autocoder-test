module.exports = {
    friendlyName: 'Delete a user',
    description: 'Helper to delete a user from the database.',
    inputs: {
        delete_criteria: {
            type: 'json',
            required: true,
            example: {id: 123}
        }
    },
    fn: async function (inputs, exits) {
        await User.destroy(inputs.delete_criteria);
        return exits.success();
    }
};